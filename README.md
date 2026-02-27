# Laung Laachi – Website, Booking & Analytics System

## Overview
Laung Laachi is a real-time restaurant booking and analytics system designed to streamline the reservation process. This system offers a seamless booking experience for customers and provides restaurant staff with a powerful admin dashboard to manage reservations, track availability, and gather insights from integrated analytics.

## Problem
Before Laung Laachi, the restaurant faced several challenges:
- Manual booking handling leading to double bookings and mismanagement of reservations.
- Lack of real-time availability tracking.
- Inefficient communication through manual email and phone calls for booking confirmations.
- Difficulty analyzing trends and optimizing booking processes.

## Approach
Laung Laachi addresses these challenges by:
- **Automated booking confirmations** using Twilio (SMS) and SendGrid (Email) to instantly confirm bookings and reduce human error.
- **Real-time availability tracking**, ensuring that table slots are checked before confirming reservations to prevent double bookings.
- **Real-time analytics integration** to gain insights into customer preferences, busy times, and system performance.
- **Scalable backend** using React, Node.js, and MongoDB, allowing for easy expansion of features and data management.

## Tech Stack
- **Frontend**: React.js (for responsive UI & admin dashboard)
- **Backend**: Node.js, Express.js (for server-side logic and API endpoints)
- **Database**: MongoDB (for storing booking documents, time slot availability, and reservation metadata)
- **External Integrations**: 
  - **Twilio** for SMS booking confirmations
  - **SendGrid** for email confirmations

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/launglaachi.git
