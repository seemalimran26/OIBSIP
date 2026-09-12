/* =========================================
   PASSWORD HASHING
========================================= */
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
/* =========================================
   PASSWORD VISIBILITY
========================================= */
const passwordToggles = document.querySelectorAll(".password-toggle");
passwordToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const input = document.getElementById(targetId);
    if (input.type === "password") {
      input.type = "text";
      this.textContent = "Hide";
    } else {
      input.type = "password";
      this.textContent = "Show";
    }
  });
});
/* =========================================
   PASSWORD STRENGTH
========================================= */
const passwordInput = document.getElementById("registerPassword");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
if (passwordInput && strengthBar && strengthText) {
  passwordInput.addEventListener("input", function () {
    const password = this.value;
    let score = 0;
    if (password.length >= 8) {
      score++;
    }
    if (/[A-Z]/.test(password)) {
      score++;
    }
    if (/[a-z]/.test(password)) {
      score++;
    }
    if (/\d/.test(password)) {
      score++;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
    }
    const widths = ["0%", "20%", "40%", "60%", "80%", "100%"];
    strengthBar.style.width = widths[score];
    if (score === 0) {
      strengthText.textContent = "Password strength";
    } else if (score === 1) {
      strengthText.textContent = "Very weak";
    } else if (score === 2) {
      strengthText.textContent = "Weak";
    } else if (score === 3) {
      strengthText.textContent = "Medium";
    } else if (score === 4) {
      strengthText.textContent = "Strong";
    } else {
      strengthText.textContent = "Very strong";
    }
  });
}
/* =========================================
   REGISTER
========================================= */
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    /* Get Form Values */
    const name = document.getElementById("registerName").value.trim();
    const username = document.getElementById("registerUsername").value.trim();
    const email = document
      .getElementById("registerEmail")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    /* Error Elements */
    const nameError = document.getElementById("nameError");
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const success = document.getElementById("registerSuccess");
    const registerBtn = document.getElementById("registerBtn");
    /* Clear Previous Messages */
    nameError.textContent = "";
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    success.textContent = "";
    let valid = true;
    /* =========================================
           EMPTY FIELD VALIDATION
        ========================================= */
    if (!name) {
      nameError.textContent = "Please enter your full name.";
      valid = false;
    }
    if (!username) {
      usernameError.textContent = "Please enter a username.";
      valid = false;
    }
    if (!email) {
      emailError.textContent = "Please enter your email address.";
      valid = false;
    }
    if (!password) {
      passwordError.textContent = "Please enter a password.";
      valid = false;
    }
    if (!confirmPassword) {
      confirmError.textContent = "Please confirm your password.";
      valid = false;
    }
    if (!valid) {
      return;
    }
    /* =========================================
           NAME VALIDATION
        ========================================= */
    if (name.length < 3) {
      nameError.textContent = "Please enter at least 3 characters.";
      valid = false;
    }
    /* =========================================
           USERNAME VALIDATION
        ========================================= */
    if (username.length < 3) {
      usernameError.textContent =
        "Username must contain at least 3 characters.";
      valid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      usernameError.textContent = "Use only letters, numbers and underscore.";
      valid = false;
    }
    /* =========================================
           EMAIL VALIDATION
        ========================================= */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }
    /* =========================================
           PASSWORD VALIDATION
           Requirement:
           8+ characters
           At least 1 number
        ========================================= */
    if (password.length < 8) {
      passwordError.textContent =
        "Password must contain at least 8 characters.";
      valid = false;
    } else if (!/\d/.test(password)) {
      passwordError.textContent = "Password must contain at least one number.";
      valid = false;
    }
    /* =========================================
           CONFIRM PASSWORD
        ========================================= */
    if (password !== confirmPassword) {
      confirmError.textContent = "Passwords do not match.";
      valid = false;
    }
    /* Stop if validation failed */
    if (!valid) {
      return;
    }
    /* =========================================
           GET EXISTING USERS
        ========================================= */
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("users")) || [];
    } catch (error) {
      users = [];
    }
    /* =========================================
           DUPLICATE USERNAME / EMAIL CHECK
        ========================================= */
    const existingUser = users.find((user) => {
      const existingUsername = (user.username || "").toLowerCase();
      const existingEmail = (user.email || "").toLowerCase();
      return (
        existingUsername === username.toLowerCase() || existingEmail === email
      );
    });
    if (existingUser) {
      usernameError.textContent = "Username or email is already registered.";
      return;
    }
    /* =========================================
           LOADING STATE
        ========================================= */
    registerBtn.disabled = true;
    const buttonText = registerBtn.querySelector("span");
    if (buttonText) {
      buttonText.textContent = "Creating account...";
    }
    /* =========================================
           HASH PASSWORD
        ========================================= */
    try {
      const hashedPassword = await hashPassword(password);
      /* =========================================
               CREATE NEW USER
            ========================================= */
      const newUser = {
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
      };
      /* Add User */
      users.push(newUser);
      /* Save User */
      localStorage.setItem("users", JSON.stringify(users));
      /* Success Message */
      success.textContent = "Account created successfully! Redirecting...";
      /* =========================================
               REDIRECT TO LOGIN
            ========================================= */
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1200);
    } catch (error) {
      console.error("Registration error:", error);
      success.textContent = "Something went wrong. Please try again.";
      registerBtn.disabled = false;
      if (buttonText) {
        buttonText.textContent = "Create Account";
      }
    }
  });
}
/* =========================================
   LOGIN
========================================= */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    /* Get Values */
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");
    const loginBtn = document.getElementById("loginBtn");
    error.textContent = "";
    /* =========================================
           EMPTY FIELD VALIDATION
        ========================================= */
    if (!username || !password) {
      error.textContent = "Please enter your username/email and password.";
      return;
    }
    /* =========================================
           LOADING STATE
        ========================================= */
    loginBtn.disabled = true;
    const buttonText = loginBtn.querySelector("span");
    if (buttonText) {
      buttonText.textContent = "Signing in...";
    }
    try {
      /* Get Users */
      let users = [];
      try {
        users = JSON.parse(localStorage.getItem("users")) || [];
      } catch (error) {
        users = [];
      }
      /* Hash Entered Password */
      const hashedPassword = await hashPassword(password);
      /* =========================================
               FIND USER
            ========================================= */
      const enteredUsername = username.toLowerCase();
      const user = users.find((user) => {
        const storedUsername = (user.username || "").toLowerCase();
        const storedEmail = (user.email || "").toLowerCase();
        return (
          (storedUsername === enteredUsername ||
            storedEmail === enteredUsername) &&
          user.password === hashedPassword
        );
      });
      /* =========================================
               INCORRECT CREDENTIALS
            ========================================= */
      if (!user) {
        error.textContent = "Invalid username/email or password.";
        loginBtn.disabled = false;
        if (buttonText) {
          buttonText.textContent = "Sign In";
        }
        return;
      }
      /* =========================================
               CREATE LOGIN SESSION
            ========================================= */
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          name: user.name,
          username: user.username,
          email: user.email,
        }),
      );
      /* =========================================
               REMEMBER ME
            ========================================= */
      const rememberMe = document.getElementById("rememberMe");
      if (rememberMe && rememberMe.checked) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
      /* =========================================
               REDIRECT TO DASHBOARD
            ========================================= */
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error("Login error:", error);
      error.textContent = "Something went wrong. Please try again.";
      loginBtn.disabled = false;
      if (buttonText) {
        buttonText.textContent = "Sign In";
      }
    }
  });
}
/* =========================================
   FORGOT PASSWORD
========================================= */
const forgotPassword = document.getElementById("forgotPassword");
if (forgotPassword) {
  forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();
    alert(
      "Password reset functionality would normally be handled by a backend email service.",
    );
  });
}
/* =========================================
   DASHBOARD PROTECTION
========================================= */
if (window.location.pathname.endsWith("dashboard.html")) {
  let loggedInUser = null;
  try {
    loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  } catch (error) {
    loggedInUser = null;
  }
  /* =========================================
       NO SESSION → LOGIN
    ========================================= */
  if (!loggedInUser) {
    window.location.href = "login.html";
  } else {
    /* User Display */
    const userDisplay = document.getElementById("userDisplay");
    const headerUsername = document.getElementById("headerUsername");
    const accountUsername = document.getElementById("accountUsername");
    const accountEmail = document.getElementById("accountEmail");
    if (userDisplay) {
      userDisplay.textContent = loggedInUser.name;
    }
    if (headerUsername) {
      headerUsername.textContent = loggedInUser.username;
    }
    if (accountUsername) {
      accountUsername.textContent = loggedInUser.username;
    }
    if (accountEmail) {
      accountEmail.textContent = loggedInUser.email;
    }
    /* =========================================
           USER AVATAR
        ========================================= */
    const firstLetter = (loggedInUser.name || "U").charAt(0).toUpperCase();
    const userAvatar = document.getElementById("userAvatar");
    const accountAvatar = document.getElementById("accountAvatar");
    if (userAvatar) {
      userAvatar.textContent = firstLetter;
    }
    if (accountAvatar) {
      accountAvatar.textContent = firstLetter;
    }
  }
}
/* =========================================
   LOGOUT
========================================= */
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    /* Clear Login Session */
    localStorage.removeItem("loggedInUser");
    /* Redirect */
    window.location.href = "login.html";
  });
}
