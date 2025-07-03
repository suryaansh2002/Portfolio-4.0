# Portfolio Website Content Audit

## Table of Contents
1. [Website Overview](#1-website-overview)
2. [Navigation & Header](#2-navigation--header)
3. [Landing/Hero Section](#3-landinghero-section)
4. [About Section](#4-about-section)
5. [Projects Section](#5-projects-section)
6. [Skills Section](#6-skills-section)
7. [Education Section](#7-education-section)
8. [Work Experience Section](#8-work-experience-section)
9. [Research Section](#9-research-section)
10. [Contact Section](#10-contact-section)
11. [Detailed Work Pages](#11-detailed-work-pages)
12. [Assets Inventory](#12-assets-inventory)
13. [Technical Architecture](#13-technical-architecture)

---

## 1. Website Overview

### Project Information
- **Project Name**: Portfolio 3.0
- **Technology Stack**: React 18.2.0, JavaScript, CSS
- **Theme Support**: Light/Dark mode toggle
- **Responsive Design**: Mobile and desktop optimized
- **Special Features**: 
  - Animated cursor
  - Particle effects (tsparticles)
  - Typewriter effect
  - Smooth scrolling navigation

### Main Sections Structure
The website follows a single-page application (SPA) structure with the following main components:
- Landing (Hero)
- Projects
- Skills
- Education
- Work Experience
- Research
- Contact

---

## 2. Navigation & Header

### Header Content
**File Location**: [`src/Components/Header/Header.jsx`](src/Components/Header/Header.jsx)

#### Logo Assets
- **Dark Theme Logo**: [`src/Assets/logo.png`](src/Assets/logo.png)
- **Light Theme Logo**: [`src/Assets/logo_light.png`](src/Assets/logo_light.png)

#### Navigation Links
1. **Home** - Links to root (`/`)
2. **About** - Links to `/about` (separate page)
3. **Projects** - Links to `/#projects` (anchor)
4. **Skills** - Links to `/#skills` (anchor)
5. **Work Experience** - Links to `/#workex` (anchor)
6. **Research Work** - Links to `/#research` (anchor)
7. **Education** - Links to `/#education` (anchor)
8. **Contact** - Links to `/#contact` (anchor)

#### Interactive Elements
- **Theme Toggle Button**: Switches between light/dark modes
  - Dark mode icon: Sun (BsSunFill)
  - Light mode icon: Moon (BsFillMoonFill)
- **Smooth Scrolling**: All navigation uses HashLink for smooth transitions

---

## 3. Landing/Hero Section

### Content Structure
**File Location**: [`src/Components/Landing/Landing.jsx`](src/Components/Landing/Landing.jsx)

#### Profile Images
- **Dark Theme**: [`src/Assets/main.png`](src/Assets/main.png)
- **Light Theme**: [`src/Assets/main_light.png`](src/Assets/main_light.png)
- **Profile Photo (Dark)**: [`src/Assets/profile.jpeg`](src/Assets/profile.jpeg)
- **Profile Photo (Light)**: [`src/Assets/profile.jpeg`](src/Assets/profile.jpeg)

#### Text Content
- **Main Heading**: "Hello, I AM SURYAANSH" (Typewriter effect)
- **Name Display**: Dynamic typewriter animation

#### Call-to-Action Buttons
1. **Download Resume**
   - **Icon**: MdSimCardDownload
   - **Action**: Downloads [`src/Assets/SuryaanshRathinam_Resume.pdf`](src/Assets/SuryaanshRathinam_Resume.pdf)
   - **Text**: "Download Resume"

2. **Get In Touch**
   - **Icon**: IoIosCall
   - **Action**: Opens Calendly link
   - **URL**: `https://calendly.com/suryaansh2002/connect-with-suryaansh`
   - **Text**: "Get In Touch"

3. **More About Me**
   - **Icon**: AiOutlineInfoCircle
   - **Action**: Navigates to `/about`
   - **Text**: "More About Me"

---

## 4. About Section

### Content Structure
**File Location**: [`src/Components/About/About.jsx`](src/Components/About/About.jsx)

#### Personal Information
**Bio Text**:
```
Hello, I'm Suryaansh Rathinam, pursuing my Masters of Computing (AI Specialization) at the National University of Singapore

Proficient as a Full Stack Developer and experience in ML Development, I've constantly worked on developing my skills by exploring various tech stacks, tools, and frameworks through diverse projects, fostering an unceasing desire for learning and growth.

My journey extends beyond development; as I have delved into research in Artificial Intelligence and other domains as well.

I am currently working on solidifying and enhancing my knowledge in the field of LLMs, and trying to keep up with the latest advancements in the AI space. I am also open to take up any freelance opportunities, and am on the search for internships for Summer (May-Jul) 2025.

Please reach out to me if you're pursuing endeavors aligned with my interests or need a helping hand, feel free to connect. Let's join forces to explore new and exciting possibilities.
```

#### Profile Images
- **Dark Theme**: [`src/Assets/me.png`](src/Assets/me.png)
- **Light Theme**: [`src/Assets/me2.png`](src/Assets/me2.png)

#### Internal Links
- **Skills**: Links to `/#skills`
- **Projects**: Links to `/projects`
- **Research**: Links to `/#research`
- **Connect**: Links to Calendly (`https://calendly.com/suryaansh2002/connect-with-suryaansh`)

---

## 5. Projects Section

### Content Structure
**File Location**: [`src/Components/Projects/Projects.jsx`](src/Components/Projects/Projects.jsx)

#### Section Header
- **Title**: "My Projects"
- **Display Logic**: Shows 3 projects by default, expandable to show all

#### Project Listings

##### 1. Document and Video Q&A System
- **Date**: Feb 2025
- **Description**: "A web app for uploading PDFs and YouTube videos, processing them into chunks, and interacting via chat. Uses MongoDB for document storage, Pinecone for vector retrieval, and OpenAI for responses. Features include document/video processing, vector storage, and a chat interface for querying."
- **GitHub**: `https://github.com/suryaansh2002/multi-doc-chat-rag`
- **Website**: `https://multi-doc-chat-rag-client.vercel.app/`

##### 2. Real Time Meeting Summarizer
- **Date**: Nov 2024
- **Description**: "Developed a Chrome extension with FastAPI backend that captures and processes real-time audio from browser tabs. Implemented an ML pipeline using OpenAI Whisper for transcription and Mistral-7B model for intelligent summarization, featuring speaker diarization and knowledge graph generation for contextual understanding."
- **GitHub**: `https://github.com/suryaansh2002/real_time_meeting_sumarizer`

##### 3. Distributed Maze Game
- **Date**: Oct 2024
- **Description**: "Implemented multi-threaded server logic with dynamic server swapping for continuous operation, handling player crashes and asynchronous movements. Used TCP/Java RMI for reliable messaging and constructed a tracker-based player registry to enhance peer discovery and reduce system load, demonstrating fault-tolerance in gaming."
- **GitHub**: `https://github.com/suryaansh2002/cs5223-A1`

##### 4. IRCTC Tatlak Booking
- **Date**: Feb 2025
- **Description**: "A desktop application built using Electron JS and Python to allow users to automate scheduling the booking process of Tatkal tickets from the Indian Railways IRCTC Website. This is done using Selenium for browser automation and apscheduler to schedule Cron jobs."
- **GitHub**: `https://github.com/suryaansh2002/IRCTC_Tatkal`

##### 5. SLCM Automation
- **Date**: Sept 2023
- **Description**: "Created a Selenium-based web scraping and automation tool to streamline data collection and form filling from the Student Lifecycle Management (SLCM) portal. This tool reduces manual effort and enhances data accuracy for academic processes."
- **GitHub**: `https://github.com/suryaansh2002/form_filling_automation`
- **Website**: `https://mitcse.manipal.edu/mentor`
- **Certificate**: `https://drive.google.com/file/d/1CNSnxxN68ZbROibg1_3gB_JncxbmDmhl/view?usp=sharing`

##### 6. Psychup
- **Date**: Feb 2022
- **Description**: "A platform aimed at increasing awareness and providing content regarding psychology and mental health."
- **GitHub**: `https://github.com/suryaansh2002/psychup`
- **Website**: `https://psychup.netlify.app/`
- **Image**: [`src/Assets/Skills/psych.png`](src/Assets/Skills/psych.png)

##### 7. Decrypt
- **Date**: Feb 2022
- **Description**: "Engineered the backend for an annual online cryptic hunt competition conducted by IEEE SBM, accommodating over 500 participants. The system ensures seamless user experience and robust performance during high-traffic events."
- **GitHub**: `https://github.com/suryaansh2002/d3crypt_backend`
- **Image**: [`src/Assets/Skills/decrypt.png`](src/Assets/Skills/decrypt.png)

##### 8. Discussion Rooms
- **Date**: Jan 2022
- **Description**: "Developed a web application facilitating real-time discussions, built with an HTML-CSS frontend and a Python (Django) backend. The platform supports user authentication, topic creation, and interactive conversations."
- **GitHub**: `https://github.com/suryaansh2002/Discussion_Rooms_Django_App`
- **Image**: [`src/Assets/Skills/discussion.png`](src/Assets/Skills/discussion.png)

##### 9. DataGrad
- **Date**: Sept 2021
- **Description**: "Developed a platform to bridge the gap between top MOOCs like Coursera, Udacity, EdX, and students eager to learn new skills. The application recommends the top 5 relevant courses based on the user's skill level and interests, simplifying the learning process."
- **GitHub**: `https://github.com/suryaansh2002/datagrad`
- **Website**: `https://datagrad.netlify.app/`
- **Image**: [`src/Assets/Skills/datagrad.png`](src/Assets/Skills/datagrad.png)

#### Interactive Elements
- **GitHub Icons**: AiFillGithub - Links to project repositories
- **Website Icons**: HiGlobeAlt - Links to live demos
- **Certificate Icons**: PiCertificateFill - Links to certificates
- **Show More/Less Toggle**: Expands/collapses project list

---

## 6. Skills Section

### Content Structure
**File Location**: [`src/Components/Skills/Skills.jsx`](src/Components/Skills/Skills.jsx)

#### Section Header
- **Title**: "My Skills"

#### Skill Categories

##### Programming Languages
- **Category Name**: "Programming Languages"
- **Technologies**: 
  - Python ([`src/Assets/Skills/python.png`](src/Assets/Skills/python.png))
  - JavaScript ([`src/Assets/Skills/js.png`](src/Assets/Skills/js.png))
  - C++ ([`src/Assets/Skills/c++.png`](src/Assets/Skills/c++.png))
  - C ([`src/Assets/Skills/c.png`](src/Assets/Skills/c.png))
  - Java ([`src/Assets/Skills/java.png`](src/Assets/Skills/java.png))

##### FullStack Development & UI/UX
- **Category Name**: "FullStack Development & UI/UX"
- **Technologies**:
  - Node.js ([`src/Assets/Skills/node.png`](src/Assets/Skills/node.png))
  - Express.js ([`src/Assets/Skills/express.png`](src/Assets/Skills/express.png))
  - PHP ([`src/Assets/Skills/php.png`](src/Assets/Skills/php.png))
  - Django ([`src/Assets/Skills/django.png`](src/Assets/Skills/django.png))
  - FastAPI ([`src/Assets/Skills/fastapi.png`](src/Assets/Skills/fastapi.png))
  - TypeScript ([`src/Assets/Skills/typescript.png`](src/Assets/Skills/typescript.png))
  - NestJS ([`src/Assets/Skills/nest.png`](src/Assets/Skills/nest.png))
  - HTML ([`src/Assets/Skills/html.png`](src/Assets/Skills/html.png))
  - CSS ([`src/Assets/Skills/css.png`](src/Assets/Skills/css.png))
  - Bootstrap ([`src/Assets/Skills/bootstrap.png`](src/Assets/Skills/bootstrap.png))
  - React ([`src/Assets/Skills/react.png`](src/Assets/Skills/react.png))
  - Redux ([`src/Assets/Skills/redux.png`](src/Assets/Skills/redux.png))
  - Next.js ([`src/Assets/Skills/next.png`](src/Assets/Skills/next.png))
  - Sass ([`src/Assets/Skills/sass.png`](src/Assets/Skills/sass.png))
  - Canva ([`src/Assets/Skills/canva.png`](src/Assets/Skills/canva.png))
  - Figma ([`src/Assets/Skills/figma.png`](src/Assets/Skills/figma.png))

##### Databases
- **Category Name**: "Databases"
- **Technologies**:
  - MongoDB ([`src/Assets/Skills/mongodb.png`](src/Assets/Skills/mongodb.png))
  - MySQL ([`src/Assets/Skills/mysql.png`](src/Assets/Skills/mysql.png))
  - PostgreSQL ([`src/Assets/Skills/postgres.png`](src/Assets/Skills/postgres.png))
  - TypeORM ([`src/Assets/Skills/typeorm.png`](src/Assets/Skills/typeorm.png))

##### Cloud & DevOps
- **Category Name**: "Cloud & Devops"
- **Technologies**:
  - Firebase ([`src/Assets/Skills/firebase.png`](src/Assets/Skills/firebase.png))
  - Docker ([`src/Assets/Skills/docker.png`](src/Assets/Skills/docker.png))
  - AWS ([`src/Assets/Skills/aws.png`](src/Assets/Skills/aws.png))
  - Git ([`src/Assets/Skills/git.png`](src/Assets/Skills/git.png))

##### Other Technologies
- **Category Name**: "Other"
- **Technologies**:
  - React Native ([`src/Assets/Skills/r-native.png`](src/Assets/Skills/r-native.png))
  - Flutter ([`src/Assets/Skills/flutter.png`](src/Assets/Skills/flutter.png))
  - Swift ([`src/Assets/Skills/swift.png`](src/Assets/Skills/swift.png))
  - Selenium ([`src/Assets/Skills/selenium.png`](src/Assets/Skills/selenium.png))
  - Appium ([`src/Assets/Skills/appium.png`](src/Assets/Skills/appium.png))
  - Excel ([`src/Assets/Skills/excel.png`](src/Assets/Skills/excel.png))

#### Interactive Elements
- **Expandable Categories**: Click to expand/collapse skill groups
- **Toggle Icons**: AiOutlineDown (expanded) / AiOutlineRight (collapsed)

---

## 7. Education Section

### Content Structure
**File Location**: [`src/Components/Education/Education.jsx`](src/Components/Education/Education.jsx)

#### Section Header
- **Title**: "Education"

#### Educational Institutions

##### National University of Singapore
- **Institution Image**: [`src/Assets/nus.png`](src/Assets/nus.png)
- **Institution Name**: "National University of Singapore"
- **Degree**: "Masters of Computing: Artificial Intelligence Specialisation"
- **Duration**: "2024-2025"
- **GPA**: "4.63 / 5"

##### Manipal Institute of Technology
- **Institution Image**: [`src/Assets/mahe.png`](src/Assets/mahe.png)
- **Institution Name**: "Manipal Institute of Technology"
- **Degree**: "Bachelor's of Technology: Computer Science"
- **Duration**: "2020-2024"
- **GPA**: "9.47 / 10"

---

## 8. Work Experience Section

### Content Structure
**File Location**: [`src/Components/Work/Work.jsx`](src/Components/Work/Work.jsx)

#### Section Header
- **Title**: "Work Experience"

#### Company Cards

##### Moneyflo
- **Company Logo**: [`src/Assets/Work/moneyflo.png`](src/Assets/Work/moneyflo.png)
- **Duration**: "Mar '23 - Jun '24"
- **Detail Page**: `/moneyflo`
- **Calendar Icon**: AiFillCalendar
- **Read More Link**: IoIosArrowDropright

##### Ridecell
- **Company Logo**: [`src/Assets/Work/ridecell.png`](src/Assets/Work/ridecell.png)
- **Duration**: "May '22 - Aug '22"
- **Detail Page**: `/ridecell`
- **Calendar Icon**: AiFillCalendar
- **Read More Link**: IoIosArrowDropright

##### PE Front Office
- **Company Logo**: [`src/Assets/Work/pefo.png`](src/Assets/Work/pefo.png)
- **Duration**: "Dec '22 - Jan '23"
- **Detail Page**: `/pefo`
- **Calendar Icon**: AiFillCalendar
- **Read More Link**: IoIosArrowDropright

##### Apice Tech
- **Company Logo**: [`src/Assets/Work/apt2.png`](src/Assets/Work/apt2.png)
- **Duration**: "Apr '22 - Jul '22"
- **Detail Page**: `/apt`
- **Calendar Icon**: AiFillCalendar
- **Read More Link**: IoIosArrowDropright

#### Commented Out (Not Currently Displayed)
##### Santanet
- **Company Logo**: [`src/Assets/Work/santanet.png`](src/Assets/Work/santanet.png)
- **Duration**: "Sept '21 - Jan '22"
- **Detail Page**: `/santanet`

---

## 9. Research Section

### Content Structure
**File Location**: [`src/Components/Research/Research.jsx`](src/Components/Research/Research.jsx)

#### Section Header
- **Title**: "Research Work"

#### Research Publications

##### 1. Image Segmentation and Analysis of Ultrasound of Mouse Kidney using CNN
- **Institution**: "Medical Imaging and Theragnostic Lab, IIT Kharagpur"
- **Duration**: "Jun - Aug 2023"
- **Certificate**: [`src/Assets/KGP_Certificate.pdf`](src/Assets/KGP_Certificate.pdf)
- **Download Icon**: FaFileDownload

##### 2. Analysis and Comparison of Different Frontend Frameworks
- **Author**: "Suryaansh Rathinam"
- **Conference**: "ATIS 2022 Conference"
- **Conference Link**: `https://atis2022.com/`
- **Publication**: "Springer's CCIS Series (Volume 1804)"
- **Publication Link**: `https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19`
- **PDF**: [`src/Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf`](src/Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf)
- **Download Icon**: FaFileDownload

##### 3. Survey of the use of AI models and techniques in the analysis and prediction of neuro-degenerative diseases
- **Authors**: "Dr. Srikanth Prabhu, Suryaansh Rathinam, Chirag Rao, Anurag Choudhary"
- **Conference**: "AICECS 2023"
- **Conference Link**: `http://aicecs.in/`
- **Publication**: "IOP: Journal of Physics (Volume 2751)"
- **Publication Link**: `https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022`
- **PDF**: [`src/Assets/Review_Paper.pdf`](src/Assets/Review_Paper.pdf)
- **Download Icon**: FaFileDownload

##### 4. Exploring IoT-Blockchain Integration in Agriculture: An Experimental Study
- **Authors**: "Namrata Mariam Chacko, Dr. V. G Narendra, Dr. Mamatha Balachandra, Suryaansh Rathinam"
- **Publication**: "IEEE Access"
- **Publication Link**: `https://ieeexplore.ieee.org/document/10323331`
- **PDF**: [`src/Assets/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf`](src/Assets/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf)
- **Download Icon**: FaFileDownload

---

## 10. Contact Section

### Content Structure
**File Location**: [`src/Components/Contact/Contact.jsx`](src/Components/Contact/Contact.jsx)

#### Section Header
- **Title**: "Get In Touch With Me"

#### Social Media Links

##### LeetCode
- **Icon**: SiLeetcode
- **URL**: `https://leetcode.com/suryaansh28/`
- **Target**: New tab

##### Email
- **Icon**: CgMail
- **URL**: `mailto:suryaansh2002@gmail.com`
- **Action**: Opens default email client

##### LinkedIn
- **Icon**: FaLinkedinIn
- **URL**: `https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/`
- **Target**: New tab

##### GitHub
- **Icon**: BsGithub
- **URL**: `https://github.com/suryaansh2002/`
- **Target**: New tab

#### Commented Out (Not Currently Active)
##### Medium
- **Icon**: BsMedium
- **URL**: `https://suryaansh2002.medium.com/`

#### Visual Elements
- **Bitmoji**: [`src/Assets/Skills/bitmoji.png`](src/Assets/Skills/bitmoji.png)
- **Footer Text**: "I'd love to hear from you!"

---

## 11. Detailed Work Pages

### 11.1 Moneyflo Detail Page

**File Location**: [`src/WorkPages/Moneyflo/Moneyflo.jsx`](src/WorkPages/Moneyflo/Moneyflo.jsx)

#### Company Information
- **Company Name**: "Moneyflo"
- **Duration**: "Mar '23 - Present"
- **Company Logo**: [`src/Assets/Work/moneyflo.png`](src/Assets/Work/moneyflo.png)
- **Website**: `https://www.moneyflo.ai/`

#### About The Company
```
Is a start up that is working on building a financial intelligence platform that cracks the code to e-commerce profitability. It unifies data across channels to give a single source of truth about unit economics automate reconciliation and optimize cashflows, providing clients real-time access to their revenue, cash flow, profitability, and order-related data from all channels, unified on a single platform.
```

#### Work Description
```
During my tenure at Moneyflo as a Full Stack Developer, I have been an integral part of the team driving the platform's development. This journey has encompassed both frontend and backend responsibilities. I've dedicated efforts to enhancing the platform's UI/UX across multiple iterations, consistently introducing new features to elevate user experiences and deliver valuable insights. My involvement also extends to backend development, where I've been instrumental in constructing RestAPI endpoints and functionalities that seamlessly align with user interface features. Additionally, I've played a pivotal role in empowering clients to make better-informed decisions by providing easy-to-understand insights. Moreover, I have built an AI Assistant backed by OpenAI API Endpoints, facilitating end clients to interact effortlessly and efficiently, thereby enabling them to obtain the insights necessary for informed decision-making.
```

#### Technologies Used
- NextJS
- Sass
- AntD
- FastAPI
- NestJS
- TypeORM
- Postgres
- AWS
- OpenAI

### 11.2 Ridecell Detail Page

**File Location**: [`src/WorkPages/Ridecell/Ridecell.jsx`](src/WorkPages/Ridecell/Ridecell.jsx)

#### Company Information
- **Company Name**: "Ridecell"
- **Duration**: "May '22 - Aug '22"
- **Company Logo**: [`src/Assets/Work/ridecell.png`](src/Assets/Work/ridecell.png)
- **Website**: `https://ridecell.com/`

#### About The Company
```
Ridecell is a private company founded in 2009 with its headquarters in San Francisco, CA. Ridecell Inc. is leading the way in the digital transformation of fleet businesses and operations. Their Fleet Automation solutions modernize and monetize fleets by combining data insights with digital vehicle control to turn today's manual processes into automated workflows.

Ridecell builds the technologies and solutions that unlock the full power of fleets and fleet management systems. With the help of their Fleet Automation and Mobility platform, they integrate data from sensors and multiple siloed IT systems and turn it into usable insights, digital vehicle control, and automated workflows. For the customers the result is nothing short of transformative, dramatically streamlining fleet operations and opening up new revenue opportunities.
```

#### Work Description
```
Over the course of my 4 month internship at Ridecell, I primarily worked with Quality Assurance, Automation and Testing. Starting off with understanding and testing various existing API endpoints, and moving on to automating assigned sets of test cases on Testrail.

I then moved on to testing of various versions of their different mobile apps that had finished development. Since manual testing of most of the test cases was perform by a separate team, I built upon their work to automate the test cases which were functioning manually, using Selenium and Appium, and subsequently adding the automated test cases to the existing CI/CD pipeline, to detect, test and report any breaking changes as new versions were deployed.
```

#### Technologies Used
- Python
- Pytest
- RestAPIs
- Selenium
- Appium
- Testrail

### 11.3 Apice Tech Detail Page

**File Location**: [`src/WorkPages/APT/Apt.jsx`](src/WorkPages/APT/Apt.jsx)

#### Company Information
- **Company Name**: "Apice Tech"
- **Duration**: "Apr '22 - Jul '22"
- **Company Logo**: [`src/Assets/Work/apt2.png`](src/Assets/Work/apt2.png)
- **Website**: `https://apicetech.in/`

#### About The Company
```
Apice Tech is a start up based in New Delhi, India. They aim to simplify the Software Development Life Cycle (SDLC), with the help of their product KaizIQ, that is an end-to-end SDLC tool that integrates and automates all its phases into a single framework and helps the users monitor and generate real-time progress reports.

It provides the users with a variety of features such as Project Management with real time reports and dashboards, custom CI/CD workflows and automation, and testing automation with a comprehensive testing suite.
```

#### Work Description
```
As one of the first Full Stack Software Engineering Interns at Apice Tech, I got to work closely with the founder's to understand their vision of the product and help bring it to life.

I worked on both the frontend and server side of their product, employing the use of ReactJS and Java. I also got the experience of writing unit tests for various microservices used my the product.
```

#### Technologies Used
- ReactJS
- JavaScript
- CSS
- Java
- Spring Boot

### 11.4 PE Front Office Detail Page

**File Location**: [`src/WorkPages/PEFO/Pefo.jsx`](src/WorkPages/PEFO/Pefo.jsx)

#### Company Information
- **Company Name**: "PE Front Office"
- **Duration**: "Dec '22 - Jan '23"
- **Company Logo**: [`src/Assets/Work/pefo.png`](src/Assets/Work/pefo.png)
- **Website**: `https://pefrontoffice.com/`

#### About The Company
```
PE Front Office is the only comprehensive and integrated suite of products that has been developed with a focus on the front and middle office processes for alternative investment management – Private Credit/Debt, Private Equity, Venture Capital, Fund of Funds, Real Estate Funds, Limited Partners, and Fund Admins. Their state-of-the-art yet affordable solutions include CRM, Deal Flow, Fundraising, Investment Management (that supports both Equity and Debt), Portfolio Monitoring, Investor Management, Fund Administration, and Investor Portal access. This is further augmented by Risk and Compliance Management, Task and Activities Management, Outlook/Gmail Integration, Mobile App, Document Management, and detailed Reports and Analytics.

The PE Front Office solution is available as a cloud-based subscription model and can also be deployed on the client premises. Their software-as-a-service (SaaS) solution is hosted on a fully secure, virtual, private cloud that's dedicated and exclusive to each customer.
```

#### Work Description
```
Over the course of my internship at PE Front Office, I worked primarily as a frontend web-developer. I worked primarily on the help-engine for their clients, working on improving and enhancing the user interface as well implementing certain additional features in the same.
```

#### Technologies Used
- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap

---

## 12. Assets Inventory

### 12.1 Profile & Personal Images

#### Main Profile Images
- [`src/Assets/main.png`](src/Assets/main.png) - Hero section profile (dark theme)
- [`src/Assets/main_light.png`](src/Assets/main_light.png) - Hero section profile (light theme)
- [`src/Assets/profile.jpeg`](src/Assets/profile.jpeg) - About section profile photo
- [`src/Assets/me.jpeg`](src/Assets/me.jpeg) - Alternative profile photo
- [`src/Assets/me.png`](src/Assets/me.png) - Profile image (dark theme)
- [`src/Assets/me2.png`](src/Assets/me2.png) - Profile image (light theme)

#### Brand Assets
- [`src/Assets/logo.png`](src/Assets/logo.png) - Site logo (dark theme)
- [`src/Assets/logo_light.png`](src/Assets/logo_light.png) - Site logo (light theme)

### 12.2 Educational Institution Logos
- [`src/Assets/nus.png`](src/Assets/nus.png) - National University of Singapore
- [`src/Assets/mahe.png`](src/Assets/mahe.png) - Manipal Institute of Technology
- [`src/Assets/mit.png`](src/Assets/mit.png) - MIT logo (unused)

### 12.3 Company Logos (Work Experience)
- [`src/Assets/Work/moneyflo.png`](src/Assets/Work/moneyflo.png) - Moneyflo
- [`src/Assets/Work/ridecell.png`](src/Assets/Work/ridecell.png) - Ridecell
- [`src/Assets/Work/pefo.png`](src/Assets/Work/pefo.png) - PE Front Office
- [`src/Assets/Work/apt.png`](src/Assets/Work/apt.png) - Apice Tech (version 1)
- [`src/Assets/Work/apt2.png`](src/Assets/Work/apt2.png) - Apice Tech (version 2)
- [`src/Assets/Work/apt.jfif`](src/Assets/Work/apt.jfif) - Apice Tech (JFIF format)
- [`src/Assets/Work/santanet.png`](src/Assets/Work/santanet.png) - Santanet
- [`src/Assets/Work/santanet.jfif`](src/Assets/Work/santanet.jfif) - Santanet (JFIF format)

### 12.4 Technology & Skill Icons

#### Programming Languages
- [`src/Assets/Skills/python.png`](src/Assets/Skills/python.png) - Python
- [`src/Assets/Skills/js.png`](src/Assets/Skills/js.png) - JavaScript
- [`src/Assets/Skills/c++.png`](src/Assets/Skills/c++.png) - C++
- [`src/Assets/Skills/c.png`](src/Assets/Skills/c.png) - C
- [`src/Assets/Skills/java.png`](src/Assets/Skills/java.png) - Java
- [`src/Assets/Skills/java.jpg`](src/Assets/Skills/java.jpg) - Java (JPG format)
- [`src/Assets/Skills/typescript.png`](src/Assets/Skills/typescript.png) - TypeScript
- [`src/Assets/Skills/swift.png`](src/Assets/Skills/swift.png) - Swift
- [`src/Assets/Skills/php.png`](src/Assets/Skills/php.png) - PHP
- [`src/Assets/Skills/r.png`](src/Assets/Skills/r.png) - R Programming

#### Frontend Technologies
- [`src/Assets/Skills/html.png`](src/Assets/Skills/html.png) - HTML
- [`src/Assets/Skills/css.png`](src/Assets/Skills/css.png) - CSS
- [`src/Assets/Skills/react.png`](src/Assets/Skills/react.png) - React
- [`src/Assets/Skills/redux.png`](src/Assets/Skills/redux.png) - Redux
- [`src/Assets/Skills/next.png`](src/Assets/Skills/next.png) - Next.js
- [`src/Assets/Skills/sass.png`](src/Assets/Skills/sass.png) - Sass
- [`src/Assets/Skills/bootstrap.png`](src/Assets/Skills/bootstrap.png) - Bootstrap

#### Backend Technologies
- [`src/Assets/Skills/node.png`](src/Assets/Skills/node.png) - Node.js
- [`src/Assets/Skills/express.png`](src/Assets/Skills/express.png) - Express.js
- [`src/Assets/Skills/express.jpg`](src/Assets/Skills/express.jpg) - Express.js (JPG format)
- [`src/Assets/Skills/django.png`](src/Assets/Skills/django.png) - Django
- [`src/Assets/Skills/django-logo-negative.png`](src/Assets/Skills/django-logo-negative.png) - Django (negative logo)
- [`src/Assets/Skills/fastapi.png`](src/Assets/Skills/fastapi.png) - FastAPI
- [`src/Assets/Skills/nest.png`](src/Assets/Skills/nest.png) - NestJS

#### Database Technologies
- [`src/Assets/Skills/mongodb.png`](src/Assets/Skills/mongodb.png) - MongoDB
- [`src/Assets/Skills/mysql.png`](src/Assets/Skills/mysql.png) - MySQL
- [`src/Assets/Skills/postgres.png`](src/Assets/Skills/postgres.png) - PostgreSQL
- [`src/Assets/Skills/typeorm.png`](src/Assets/Skills/typeorm.png) - TypeORM

#### Cloud & DevOps
- [`src/Assets/Skills/aws.png`](src/Assets/Skills/aws.png) - AWS
- [`src/Assets/Skills/aws.jpg`](src/Assets/Skills/aws.jpg) - AWS (JPG format)
- [`src/Assets/Skills/docker.png`](src/Assets/Skills/docker.png) - Docker
- [`src/Assets/Skills/firebase.png`](src/Assets/Skills/firebase.png) - Firebase
- [`src/Assets/Skills/git.png`](src/Assets/Skills/git.png) - Git

#### Mobile Development
- [`src/Assets/Skills/r-native.png`](src/Assets/Skills/r-native.png) - React Native (light)
- [`src/Assets/Skills/r-native_dark.png`](src/Assets/Skills/r-native_dark.png) - React Native (dark)
- [`src/Assets/Skills/flutter.png`](src/Assets/Skills/flutter.png) - Flutter

#### Testing & Automation
- [`src/Assets/Skills/selenium.png`](src/Assets/Skills/selenium.png) - Selenium
- [`src/Assets/Skills/appium.png`](src/Assets/Skills/appium.png) - Appium

#### Data Science & Analytics
- [`src/Assets/Skills/numpy.png`](src/Assets/Skills/numpy.png) - NumPy
- [`src/Assets/Skills/pandas.png`](src/Assets/Skills/pandas.png) - Pandas
- [`src/Assets/Skills/matplotlib.png`](src/Assets/Skills/matplotlib.png) - Matplotlib
- [`src/Assets/Skills/seaborn.png`](src/Assets/Skills/seaborn.png) - Seaborn
- [`src/Assets/Skills/scikit.png`](src/Assets/Skills/scikit.png) - Scikit-learn
- [`src/Assets/Skills/matlab.png`](src/Assets/Skills/matlab.png) - MATLAB
- [`src/Assets/Skills/excel.png`](src/Assets/Skills/excel.png) - Excel

#### Design & UI Tools
- [`src/Assets/Skills/figma.png`](src/Assets/Skills/figma.png) - Figma
- [`src/Assets/Skills/canva.png`](src/Assets/Skills/canva.png) - Canva

#### Social Media & Communication
- [`src/Assets/Skills/github.png`](src/Assets/Skills/github.png) - GitHub
- [`src/Assets/Skills/github2.png`](src/Assets/Skills/github2.png) - GitHub (version 2)
- [`src/Assets/Skills/github2.jpg`](src/Assets/Skills/github2.jpg) - GitHub (JPG format)
- [`src/Assets/Skills/github2.svg`](src/Assets/Skills/github2.svg) - GitHub (SVG format)
- [`src/Assets/Skills/linkedin.png`](src/Assets/Skills/linkedin.png) - LinkedIn
- [`src/Assets/Skills/gmail.png`](src/Assets/Skills/gmail.png) - Gmail
- [`src/Assets/Skills/insta.png`](src/Assets/Skills/insta.png) - Instagram
- [`src/Assets/Skills/medium.png`](src/Assets/Skills/medium.png) - Medium

### 12.5 Project-Related Images
- [`src/Assets/Skills/psych.png`](src/Assets/Skills/psych.png) - Psychup project
- [`src/Assets/Skills/datagrad.png`](src/Assets/Skills/datagrad.png) - DataGrad project
- [`src/Assets/Skills/decrypt.png`](src/Assets/Skills/decrypt.png) - Decrypt project
- [`src/Assets/Skills/decrypt.svg`](src/Assets/Skills/decrypt.svg) - Decrypt project (SVG)
- [`src/Assets/Skills/discussion.png`](src/Assets/Skills/discussion.png) - Discussion Rooms project
- [`src/Assets/Skills/chattify.png`](src/Assets/Skills/chattify.png) - Chattify project
- [`src/Assets/Skills/ecommerce.png`](src/Assets/Skills/ecommerce.png) - E-commerce project
- [`src/Assets/Skills/todo.png`](src/Assets/Skills/todo.png) - Todo project
- [`src/Assets/Skills/atlantis.png`](src/Assets/Skills/atlantis.png) - Atlantis project
- [`src/Assets/Skills/12.png`](src/Assets/Skills/12.png) - Project 12

### 12.6 Miscellaneous Assets
- [`src/Assets/Skills/bitmoji.png`](src/Assets/Skills/bitmoji.png) - Personal bitmoji
- [`src/Assets/Skills/sr_logo.png`](src/Assets/Skills/sr_logo.png) - Personal SR logo
- [`src/Assets/Skills/profile.jpeg`](src/Assets/Skills/profile.jpeg) - Profile photo in Skills folder
- [`src/Assets/Skills/pytno n.png`](src/Assets/Skills/pytno n.png) - Python (typo in filename)

### 12.7 Documents & PDFs

#### Resume
- [`src/Assets/SuryaanshRathinam_Resume.pdf`](src/Assets/SuryaanshRathinam_Resume.pdf) - Main resume
- [`src/Assets/Work/SuryaanshRathinam_Resume.1ca94813c80e4751e822.pdf`](src/Assets/Work/SuryaanshRathinam_Resume.1ca94813c80e4751e822.pdf) - Resume copy in Work folder

#### Research Papers
- [`src/Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf`](src/Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf) - Frontend frameworks research
- [`src/Assets/Review_Paper.pdf`](src/Assets/Review_Paper.pdf) - AI in neurodegenerative diseases survey
- [`src/Assets/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf`](src/Assets/Exploring_IoT-Blockchain_Integration_in_Agriculture_An_Experimental_Study.pdf) - IoT-Blockchain agriculture study

#### Certificates
- [`src/Assets/Certificate.pdf`](src/Assets/Certificate.pdf) - General certificate
- [`src/Assets/KGP_Certificate.pdf`](src/Assets/KGP_Certificate.pdf) - IIT Kharagpur research certificate

---

## 13. Technical Architecture

### 13.1 Project Structure

#### Root Configuration
- **Package Manager**: npm
- **React Version**: 18.2.0
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Deployment**: Static hosting ready

#### Key Dependencies
- **UI/Animation**:
  - `react-animated-cursor` (2.5.1) - Custom cursor effects
  - `react-tsparticles` (2.3.2) - Background particle effects
  - `typewriter-effect` (2.19.0) - Typing animations
  - `framer-motion` (7.5.0) - Advanced animations
  - `gsap` (3.11.0) - Animation library

- **Navigation**:
  - `react-router-dom` (6.3.0) - Client-side routing
  - `react-router-hash-link` (2.4.3) - Smooth scrolling to anchors

- **UI Components**:
  - `react-bootstrap` (2.4.0) - Bootstrap components
  - `react-slick` (0.29.0) - Carousel/slider functionality
  - `react-icons` (4.4.0) - Icon library

- **Utilities**:
  - `jquery` (3.6.1) - DOM manipulation
  - `bootstrap` (5.2.0) - CSS framework

#### Component Architecture

##### Main Application Flow
```
src/index.js
└── src/Components/Main/Main.jsx
    ├── Header (Navigation)
    ├── Landing (Hero Section)
    ├── Projects
    ├── Skills
    ├── Education
    ├── Work
    ├── Research
    └── Contact
```

##### Routing Structure
- **Main Route** (`/`): Single-page application with all sections
- **About Route** (`/about`): Dedicated about page
- **Work Detail Routes**:
  - `/moneyflo` - Moneyflo work experience
  - `/ridecell` - Ridecell work experience
  - `/apt` - Apice Tech work experience
  - `/pefo` - PE Front Office work experience
  - `/santanet` - Santanet work experience (commented out)

### 13.2 Styling Architecture

#### CSS Organization
- **Component-Level Styles**: Each component has its own CSS file
- **Global Styles**: [`src/index.css`](src/index.css)
- **Theme Support**: Light/dark mode implemented via CSS classes and localStorage

#### Theme Implementation
- **Storage**: `localStorage.getItem("theme")` and `localStorage.setItem("theme", value)`
- **CSS Classes**: `#lightid` for light theme styling
- **Dynamic Assets**: Different images for light/dark themes

### 13.3 State Management

#### Local State
- **Theme State**: Managed in Main component, passed down as props
- **Component State**: Individual components manage their own state (e.g., Skills expansion, Projects show more/less)

#### No Global State Management
- No Redux or Context API implementation
- Props drilling for theme state
- Local component state for UI interactions

### 13.4 Performance Considerations

#### Code Splitting
- React Router enables route-based code splitting
- Lazy loading not implemented for components

#### Asset Optimization
- Images in PNG, JPG, and SVG formats
- No image optimization pipeline detected
- PDFs served directly from assets folder

#### Bundle Analysis
- No bundle analyzer configuration detected
- Standard Create React App build process

### 13.5 Deployment Configuration

#### Build Process
- **Build Command**: `npm run build`
- **Output**: Static files in `build/` directory
- **Redirects**: [`public/_redirects`](public/_redirects) for SPA routing

#### Static Assets
- **Favicon**: [`public/favicon.ico`](public/favicon.ico)
- **Manifest**: [`public/manifest.json`](public/manifest.json) for PWA support
- **Robots**: [`public/robots.txt`](public/robots.txt) for SEO

#### SEO Configuration
- **Meta Tags**: Configured in [`public/index.html`](public/index.html)
- **Structured Data**: Not implemented
- **Open Graph**: Not detected

---

## 14. Content Summary & Statistics

### 14.1 Content Metrics

#### Textual Content
- **Total Sections**: 8 main sections
- **Projects Listed**: 9 projects with detailed descriptions
- **Work Experiences**: 4 active companies + 1 commented out
- **Research Papers**: 4 published works
- **Educational Institutions**: 2 (NUS, MIT)
- **Social Media Links**: 4 active platforms

#### Visual Assets
- **Total Images**: 100+ individual assets
- **Profile Photos**: 6 variations
- **Company Logos**: 5 work experience logos
- **Technology Icons**: 60+ skill/technology icons
- **Project Images**: 10+ project-related graphics

#### Documents
- **PDFs**: 7 total documents
- **Resume Versions**: 2 copies
- **Research Papers**: 4 academic publications
- **Certificates**: 2 achievement certificates

### 14.2 External Links Inventory

#### Professional Profiles
- **GitHub**: `https://github.com/suryaansh2002/`
- **LinkedIn**: `https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/`
- **LeetCode**: `https://leetcode.com/suryaansh28/`
- **Email**: `suryaansh2002@gmail.com`

#### Project Repositories (9 total)
- Document Q&A System: `https://github.com/suryaansh2002/multi-doc-chat-rag`
- Meeting Summarizer: `https://github.com/suryaansh2002/real_time_meeting_sumarizer`
- Distributed Maze: `https://github.com/suryaansh2002/cs5223-A1`
- IRCTC Booking: `https://github.com/suryaansh2002/IRCTC_Tatkal`
- SLCM Automation: `https://github.com/suryaansh2002/form_filling_automation`
- Psychup: `https://github.com/suryaansh2002/psychup`
- Decrypt: `https://github.com/suryaansh2002/d3crypt_backend`
- Discussion Rooms: `https://github.com/suryaansh2002/Discussion_Rooms_Django_App`
- DataGrad: `https://github.com/suryaansh2002/datagrad`

#### Live Demos (4 total)
- Document Q&A: `https://multi-doc-chat-rag-client.vercel.app/`
- SLCM Automation: `https://mitcse.manipal.edu/mentor`
- Psychup: `https://psychup.netlify.app/`
- DataGrad: `https://datagrad.netlify.app/`

#### Company Websites (4 total)
- Moneyflo: `https://www.moneyflo.ai/`
- Ridecell: `https://ridecell.com/`
- Apice Tech: `https://apicetech.in/`
- PE Front Office: `https://pefrontoffice.com/`

#### Academic Publications (4 total)
- ATIS 2022: `https://atis2022.com/`
- Springer CCIS: `https://link.springer.com/chapter/10.1007/978-981-99-2264-2_19`
- AICECS 2023: `http://aicecs.in/`
- IOP Physics: `https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012022`
- IEEE Access: `https://ieeexplore.ieee.org/document/10323331`

#### External Services
- **Calendly**: `https://calendly.com/suryaansh2002/connect-with-suryaansh`
- **Google Drive Certificate**: `https://drive.google.com/file/d/1CNSnxxN68ZbROibg1_3gB_JncxbmDmhl/view?usp=sharing`

### 14.3 Technology Stack Summary

#### Frontend Technologies (16 total)
React, JavaScript, TypeScript, HTML, CSS, Sass, Bootstrap, Next.js, Redux, jQuery, Figma, Canva, React Native, Flutter, Swift, Electron

#### Backend Technologies (8 total)
Node.js, Express.js, Python, Django, FastAPI, Java, Spring Boot, PHP, NestJS

#### Databases (4 total)
MongoDB, MySQL, PostgreSQL, TypeORM

#### Cloud & DevOps (4 total)
AWS, Docker, Firebase, Git

#### Testing & Automation (3 total)
Selenium, Appium, Pytest

#### Data Science (7 total)
NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, MATLAB, Excel

---

## 15. Maintenance & Update Guidelines

### 15.1 Content Update Procedures

#### Adding New Projects
1. Update [`src/Components/Projects/Projects.jsx`](src/Components/Projects/Projects.jsx)
2. Add project object to `projectData` array
3. Include project image in [`src/Assets/Skills/`](src/Assets/Skills/) if needed
4. Update this Content.md document

#### Adding New Work Experience
1. Create new detail page in [`src/WorkPages/`](src/WorkPages/)
2. Add company logo to [`src/Assets/Work/`](src/Assets/Work/)
3. Update [`src/Components/Work/Work.jsx`](src/Components/Work/Work.jsx)
4. Add routing in main application
5. Update this Content.md document

#### Adding New Skills
1. Add skill icon to [`src/Assets/Skills/`](src/Assets/Skills/)
2. Update [`src/Components/Skills/Skills.jsx`](src/Components/Skills/Skills.jsx)
3. Add to appropriate skill category in `skillImages` object
4. Update this Content.md document

### 15.2 Asset Management

#### Image Guidelines
- **Format**: PNG preferred for logos and icons
- **Naming**: Use lowercase with hyphens or underscores
- **Size**: Optimize for web (under 500KB recommended)
- **Theme Variants**: Create both light and dark versions when needed

#### Document Management
- **PDFs**: Store in main [`src/Assets/`](src/Assets/) directory
- **Naming**: Use descriptive names with author/title
- **Size**: Compress for web delivery
- **Backup**: Maintain copies in cloud storage

### 15.3 SEO & Performance

#### Content Optimization
- **Meta Descriptions**: Update for each major content change
- **Alt Text**: Add to all images (currently missing)
- **Structured Data**: Consider implementing JSON-LD
- **Loading Performance**: Optimize images and implement lazy loading

#### Technical SEO
- **Sitemap**: Generate and submit to search engines
- **Analytics**: Implement Google Analytics or similar
- **Performance Monitoring**: Use Lighthouse for regular audits

---

*This document serves as a comprehensive audit of all content within the Portfolio 3.0 website. It should be updated whenever content changes are made to maintain accuracy and serve as a reference for future development and maintenance activities.*

**Last Updated**: February 7, 2025
**Document Version**: 1.0
**Total Word Count**: ~8,500 words
**Total Assets Cataloged**: 100+ files