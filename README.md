# Catstagram: A Photo Sharing App for Cats<!-- omit in toc -->

Catstagram is a photo-sharing web application tailored for cat lovers to share and explore delightful cat images. Leveraging [Next.js][nextjs] for a seamless front-end experience and [Sanity.io][sanity-io] as the backend content platform, this project encapsulates a full-stack development experience.

## Features

- A complete content management setup with Sanity Studio
- Fully customizable components and schemas
- A modern front-end with Next.js, enhanced by Tailwind CSS
- Integration with Sanity.io for real-time data handling and storage

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Sanity Studio Setup](#sanity-studio-setup)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Project Structure

Outlined below is the core structure of the Catstagram app:

- **app**: Core application components including the studio and main layout.
- **components**: Reusable UI components specific to the blog functionality.
- **lib**: Helper and utility functions, including Sanity.io client configurations.
- **pages**: React components/pages using Next.js routing.
- **public**: Static files such as images, favicons, and configuration files.
- **schemas**: Data schema files for Sanity.io content modeling.
- **plugins**: Custom plugins to enhance the Sanity Studio experience.
- **netlify.toml**, **package.json**, etc.: Configuration and dependency management files.

For a detailed overview of the project files and directories, refer to the included `ProjectStructure.md` document.

## Getting Started

### Prerequisites

To get started, ensure you have the following:

- [Node.js][nodejs] (latest stable version)
- [Sanity CLI][sanity-cli] installed globally (`npm install -g @sanity/cli`)
- An account on [Sanity.io][sanity-io]

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/catstagram.git
cd catstagram
npm install
