# To-Do Web App

A responsive and interactive **To-Do Web App** built with HTML, CSS, and JavaScript. The application allows users to add, edit, complete, and delete tasks while keeping tasks saved in the browser using `localStorage`.

The application separates tasks into **Pending Tasks** and **Completed Tasks** and displays the current task count for each section.

## Features

* Add new tasks
* Mark tasks as completed
* Mark completed tasks as pending again
* Edit existing tasks
* Delete tasks with confirmation
* Separate pending and completed task sections
* Display pending and completed task counts
* Show task creation date and time
* Save tasks using browser `localStorage`
* Tasks remain available after refreshing the page
* Empty-state messages for both sections
* Add tasks using the **Enter** key
* Maximum task length of 100 characters
* Prevent empty tasks
* HTML injection protection for task text
* Responsive design for desktop, tablet, and mobile screens

## Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling, layout, gradients, responsive design, and animations
* **JavaScript** — Application logic, DOM manipulation, events, and task management
* **LocalStorage API** — Saving tasks in the browser

## Task Management

The application provides complete basic task management functionality.

### Add Task

Enter a task in the input field and click **Add Task**.

The task is stored with:

* Unique ID
* Task text
* Completion status
* Creation date and time

Example task object:

```javascript
{
  id: 123456789,
  text: "Complete assignment",
  completed: false,
  createdAt: "9/19/2026, 8:00:00 PM"
}
```

### Mark Complete

Users can mark a pending task as completed.

Completed tasks are automatically moved from the **Pending Tasks** section to the **Completed Tasks** section.

### Mark Pending

A completed task can be moved back to the pending list using the **Mark Pending** button.

### Edit Task

The **Edit** button allows users to modify an existing task.

The application prevents saving an empty task.

### Delete Task

The **Delete** button removes a task after asking the user for confirmation.

## LocalStorage

The application uses the browser's `localStorage` to save tasks.

Tasks are stored using the key:

```text
tasks
```

Whenever a task is added, edited, completed, or deleted, the updated task list is saved to localStorage.

When the application loads, previously saved tasks are retrieved automatically.

This means tasks are preserved when the user refreshes or reopens the page in the same browser.

## Task Counts

The application displays separate counts for:

* Pending tasks
* Completed tasks

For example:

```text
Pending Tasks        3 pending

Completed Tasks      2 completed
```

The counts are updated automatically whenever the task list changes.

## Empty States

The application provides helpful messages when there are no tasks.

### Pending Tasks

```text
No pending tasks. You're all caught up!
```

### Completed Tasks

```text
No completed tasks yet.
```

These messages automatically appear or disappear depending on the current task status.

## Input Validation

The application validates task input before adding or editing tasks.

It prevents:

* Empty tasks
* Tasks containing only spaces
* Empty edited tasks

Tasks can contain a maximum of **100 characters**.

## HTML Injection Protection

Task text is processed through an `escapeHTML()` function before being inserted into the task list.

This prevents user-entered HTML from being interpreted as actual HTML content.

## Responsive Design

The application is responsive across different screen sizes.

### Desktop

The task application is displayed in a centered white card with a large task-management layout.

### Tablet

The task layout adjusts spacing and task action buttons for smaller screens.

### Mobile

The application adapts by:

* Reducing padding
* Adjusting heading sizes
* Stacking the task input and Add Task button
* Making task action buttons fit smaller screens
* Adjusting task text and section headings

## User Interface

The application includes:

* Gradient background
* White task management card
* Task icon
* Pending and completed sections
* Task counters
* Interactive task cards
* Edit, Delete, and Complete buttons
* Hover effects
* Responsive mobile layout

## Project Structure

```text
To-Do-Web-App/
│
├── index.html
├── style.css
├── script.js
├── icon.webp
└── README.md
```

## How to Run

1. Download or clone the project.
2. Make sure all project files are in the same folder.
3. Ensure `icon.webp` is available in the project directory.
4. Open `index.html` in a modern web browser.
5. Start adding tasks.

No server, database, or additional installation is required.

## How It Works

1. Enter a task in the input field.
2. Click **Add Task** or press **Enter**.
3. The task appears under **Pending Tasks**.
4. Use **Mark Complete** to move it to completed tasks.
5. Use **Edit** to modify a task.
6. Use **Delete** to remove a task.
7. All changes are automatically saved in the browser's localStorage.

## Project Purpose

This project was created to practice:

* JavaScript fundamentals
* DOM manipulation
* Event handling
* Arrays and objects
* Array methods such as `filter()`, `map()`, and `find()`
* LocalStorage
* CRUD-style task operations
* Input validation
* Dynamic HTML generation
* Responsive web design
* Basic security through HTML escaping

## Author

**Seemal Imran**

BS Information Technology Student
Frontend / Web Development

## License

This project is created for educational and portfolio purposes.
