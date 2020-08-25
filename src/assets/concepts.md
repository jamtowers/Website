# Concepts
This is general development concepts that I have picked up over time.  
This is not an exhaustive roundup.

## Development Cycle
### Agile Methodology
During my course this was the main methodology we were taught and used so it's the method I'm most familar with when it comes to managing a development project.
Overall this is my preferred way of running a project as it tends to encourage collective control and copperation rather then central control and direction.

### Automated Testing
Everyone hates writing tests, but if your working in a team on a project that needs to be supported into the future, they are important.

Some people write the tests and then code the solution, personally I prefer to write the solution and then write the tests for it to ensure it's working as expected, the reason I do it this way is it lets me keep the solution to any partiluar problem flexable rather then commiting to one particular solution I can change how the solution works midway through writing it if I find a better way of doing it without needing to rewrite the tests to account for that.

In the past I've used [xUnit](https://xunit.github.io/), [Jasmine](https://jasmine.github.io/), [Protractor](https://www.protractortest.org/) and [Django's Testing Framework](https://docs.djangoproject.com/en/3.1/topics/testing/).

### Continuous Intergration/Deployment
I always make a CI/CD pipeline for every reasonably large project I work on, even if it is just me who is working on it, It really does save time in the long run.
I have expirence with [Azure pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) and [Gitlab pipelines](https://docs.gitlab.com/ee/ci/pipelines/)

### Code Reviews/Merge Requests
Code review and merge requests are a good way of ensuring clean code and gives another oppotunity to catch any bugs, plus they gives devs a chance to learn new techniques from eachother.
To be honest I haven't got as much expirence with these as I would like because most of the projects I've been involved with haven't had the need for them, but I see the value in them and am keen to participate in them.

`more will be added in the future...`

<!-- possible things to add below later
## Web Development
I like to keep the back and front ends seperate
### Frontend Development
#### Single page application (SPA)
### Backend Development -->
