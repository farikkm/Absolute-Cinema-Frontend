# Product Requirements Document

## Absolute Cinema (AC)

### 1. Product Overview

- **Product Name**: Absolute Cinema (AC)
- **Version**: 1.0.0
- **Product Type**: Front-end Interface

Absolute Cinema - This is a site for getting acquainted with the latest news in the film industry.

### 2. Target Users
- **Adults and Teenagers** - Movies and Series
- **Kids** - Movies and Series only for kids.

### 3. Core Features

#### 3.1 User Authentication    
- User Registration - Account Creation (Opt.: with email verification)
- User Login - Secure Authentication with JWT tokens.
- Password Management - (Opt.) Change password, forgot/reset password functionality

### 4. Technical Specifications

#### 4.1 Pages

- /login - Login Page
- /register - Register Page
- /home - Page with all movies and series 
- /movies - Page only for movies
- /movie/:id - Page only about one movie
- /series - Page only for series
- /serie/:id - Page only about one serie
- /home/kids - Page with movies and series for kids
- /favorites - Page with user favorites movies and series

#### 4.2 Layouts
- **Mobile** - starts with Iphone SE
- **Desktop** - start with FullHD (1920/1080)
- **Tablet** (Optional) - start with Ipad mini

### 5. Security Features
- **Authentication** - Email and password verification 

### 6. Success Critirea
- FSD - architecture
- Folders Structure
- Выгнать из группы Жавохира
- User-friendly interface for all devices (Desktop and mobiles)
- Show only latest updates in movies and series
- Secure storing your favorites movies