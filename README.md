# ChatboxProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## 1. GITHUB LINK: 

https://github.com/puneetgupta409/chatbox

## 2. Web Application Link:


## 3. Work Breakdown Chart: 
<'/src/assets/requirment-plan/Water Fall Model.mvdx'>

## 4. Brief Description: 

This application basically do chat with AI and i integrate with CHATGPT API in which i send a request to the server and get response and show it in the chatbot.

## 4.a Thought process: 

The application aims to facilitate chat interactions with AI through integration with the CHATGPT API. Users input a chat API key to initiate conversations with the AI chatbot, sending requests and receiving responses within the chat interface.

## 4.b Design decisions: 

I found inspiration for the design by browsing through free Figma designs and searching for simple yet effective chatbot designs on Google. I selected elements that aligned with my vision for the application, keeping it clean and user-friendly.

conversations with the AI chatbot, sending requests and receiving responses within the chat interface.

## 4.c how the app works:

When a user enters the chat API key, the chat box is activated. Users can then initiate conversations by sending messages and receiving replies.



## 4.d What method you followed in coming up with your submission:


Firstly, I conducted thorough research to understand the requirements and scope of the project. This involved analyzing similar applications, studying user needs, and identifying key features required for a chatbot integrated with the CHATGPT API.

Once I had a clear understanding of the project requirements, I proceeded with the design phase. I explored various design resources, including free Figma designs and simple chatbot layouts available online. Drawing inspiration from these references, I created wireframes and mockups to visualize the user interface and user experience. This step helped me to finalize the design direction before moving on to development.

In the development phase, I chose Angular as the primary framework for building the frontend interface due to its robust features and ease of use. I also integrated the CHATGPT API into the application to enable seamless communication between the user and the chatbot. Throughout the development process, I adhered to best practices and coding standards to ensure maintainability and scalability.

Testing played a crucial role in validating the functionality and performance of the application. I conducted thorough testing, including unit tests for individual components and integration tests for end-to-end functionality. Additionally, I performed user acceptance testing to gather feedback and make necessary adjustments to improve the user experience.

Iterative development was key to the success of this project. I regularly reviewed the progress, solicited feedback from stakeholders, and made iterative improvements based on their input. This agile approach allowed me to adapt to changing requirements and deliver a high-quality solution that meets the needs of the users.

Overall, the methodological approach I followed involved research-driven planning, iterative design and development, rigorous testing, and continuous improvement through feedback and iteration.

## 5. Design Diagram: 

https://miro.com/welcomeonboard/U29aWDZOUklYYlV6c1d0UDZqZld2MXJuYTk0bU5rc2trVmxpOE1YQ2FGZVAyUFFwdlhhQnY2cm56MDBkVW1YSXwzNDU4NzY0NTg1MTQ5OTQxNDU1fDI=?share_link_id=516032330233


## 6. Test Cases

1. Responsive Design Test: Verify that the application layout adjusts smoothly across different screen sizes and devices, including desktops, tablets, and mobile phones.

2. API Error Handling Test: 
a). Confirm that the application gracefully handles API errors, displaying user-friendly error messages when there are issues with sending requests or receiving responses from the backend server.
b).Ensure that error states are clearly communicated to the user and logged for debugging purposes.

3. Session-based Key Storage Test:

a). Test that the application stores API keys securely and only for the duration of the user session.
b). Verify that API keys are not persisted beyond the user's session to prevent unauthorized access or data breaches.

4. Routing Test:

a). Validate the routing functionality of the application by navigating between different pages and confirming that the correct components are rendered based on the URL paths.
b). Ensure that route guards are implemented to restrict access to certain pages based on user authentication status.

5. Lazy Loading Test:

a). Check that modules are lazily loaded as needed to improve application performance and reduce initial loading times.
b). Verify that only essential modules are loaded upfront, with additional modules loaded dynamically when requested by the user.

6. Performance and Memory Test:

a). Evaluate the application's performance and memory usage to identify any potential memory leaks or performance bottlenecks.
b). Monitor CPU and memory utilization during various interactions with the application, such as sending messages, receiving responses, and navigating between pages.
c). Test the application under different load conditions to ensure it remains responsive and performs optimally, even during peak usage periods.

## 7. Suggested Enhancements:

1. Security: Implement robust authentication, encryption, and regular security audits.
2. Performance: Optimize database queries, implement caching, and scale horizontally.
3. Resilience: Ensure fault tolerance, set up monitoring/alerting, and establish disaster recovery.
4. Code Quality: Maintain clean code, implement CI/CD pipelines, and use static code analysis.
5. Monitoring: Integrate logging, metrics, and APM tools for comprehensive monitoring.
6. Compliance: Ensure compliance with industry regulations and standards.
7. User Experience: Conduct user testing and enhance the user interface based on feedback.