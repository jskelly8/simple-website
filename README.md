# simple-website

## Description
Simple-Website is a basic web application showcasing the integration of a React frontend with a Django backend. The application is designed to demonstrate the deployment of a full-stack application on AWS, utilizing various AWS services for hosting, storage, and distribution.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Badges](#badges)
- [Features](#features)
- [Questions](#questions)

## Installation

To visit the site, please refer to the deployed application link in the [Usage](#usage) section.

For local testing and development:
1. Clone the repository: `git clone https://github.com/jskelly8/simple-website.git`
2. Navigate to the project directory: `cd simple-website`
3. Install dependencies for the client and server:
    ```bash
    cd client
    npm install
    cd ../server
    pip install -r requirements.txt
    ```
4. Build the client: 
    ```bash
    cd client
    npm run build
    ```
5. Start the server:
    ```bash
    cd ../server
    python manage.py runserver
    ```

## Usage

To visit the deployed application, click the following logo:
[![Picture of cats cuddling](./client/public/randomCat.png)](http://52.15.151.97/)

### Key Features
- Basic React frontend
- Django backend
- Integration with AWS services

## Deployment

The application is deployed on AWS using the following services:
- **EC2** for hosting the server
- **Nginx** as a reverse proxy
- **Gunicorn** to serve the Django application
- **S3** for storing static and media files
- **CloudFront** for CDN

### Deployment Steps:
1. Launch an EC2 instance with Amazon Linux 2 AMI.
2. Install necessary dependencies (Python, Nginx, Gunicorn, etc.).
3. Configure Nginx as a reverse proxy.
4. Set up Gunicorn to serve the Django application.
5. Create an S3 bucket for static and media files.
6. Update the Django settings to use S3.
7. Create a CloudFront distribution and configure it to use the S3 bucket as the origin.

## Badges

![Static Badge](https://img.shields.io/badge/thank_you-for_visiting-purple)

## Features

- **React** for building user interfaces
- **Django** for the backend
- **Nginx** as a reverse proxy
- **Gunicorn** as the WSGI HTTP server
- **AWS EC2** for hosting the application
- **AWS S3** for storing static and media files
- **AWS CloudFront** for CDN
- **GitHub** for version control

## Questions

If you have any questions, feel free to reach out to me via [GitHub](https://github.com/jskelly8/) or email me at jessskelton888@gmail.com.