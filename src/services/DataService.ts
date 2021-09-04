import Category from "../models/Category";
import CategoryThread from "../models/CategoryThread";
import Thread from "../models/Thread";

export async function getCategories(): Promise<Array<Category>> {
    const promise = new Promise<Array<Category>>((res, rej) => {
        setTimeout(() => {
            const categories = [];
            const programming = new Category("1", "Programming");
            categories.push(programming);
            const interviews = new Category("2", "Interview Prep");
            categories.push(interviews);
            const jobs = new Category("3", "New Grad Jobs");
            categories.push(jobs);
            const projects = new Category("4", "Project Help");
            categories.push(projects);
            const resume = new Category("5", "Resume Check");
            categories.push(resume);

            res(categories);
        }, 2000);
    });
    return promise;
}

export async function getThreadsByCategory(
    catID: string
): Promise<Array<Thread>> {
    const promise = new Promise<Array<Thread>>((res, rej) => {
        setTimeout(() => {
            const threads: Array<Thread> = [];
            threads.push({
                id: "1",
                views: 22,
                title: "Thread 1",
                body:
                    "How do you get a job as a new grad during this pandemic?",
                userName: "Jason",
                userID: "1",
                points: 11,
                createdOn: new Date(),
                lastModifiedOn: new Date(),
                threadItems: [
                    {
                        id: "1",
                        views: 22,
                        points: 2,
                        body: "ThreadItem 1",
                        userName: "John",
                        userID: "2",
                        createdOn: new Date(),
                        threadID: "1",
                    },
                ],
                category: new Category("1", "Programming"),
            });
            threads.push({
                id: "2",
                views: 2,
                title: "Thread 2",
                body:
                    "Can someone tell what goes on in Two Sigma onsite?",
                userName: "Lam",
                userID: "2",
                points: 55,
                createdOn: new Date(),
                lastModifiedOn: new Date(),
                threadItems: [
                    {
                        id: "1",
                        views: 22,
                        points: 2, 
                        body: "ThreadItem 1",
                        userName: "Levi",
                        userID: "2",
                        createdOn: new Date(),
                        threadID: "2",
                    },
                ],
                category: new Category("2", "Interview Prep"),
            });

            res(threads);
        }, 2000);
    });
    return promise; 
}

export async function getTopCategories(): Promise<Array<CategoryThread>> {
    const promise = new Promise<Array<CategoryThread>>((res, rej) => {
        setTimeout(() => {
            const topCategories = [];
            const js = new CategoryThread(
                "1",
                "Programming",
                "How can I learn TypeScript quickly?"
            );
            topCategories.push(js);
            const node = new CategoryThread(
                "2",
                "Programming",
                "Tips on learning Node and Express."
            );
            topCategories.push(node);
            const front_end = new CategoryThread(
                "3",
                "Programming",
                "Most popular front-end technologies in 2021?"
            );
            topCategories.push(front_end);
            const google = new CategoryThread(
                "4",
                "Interview Prep",
                "How do I prepare for Google interviews in 4 weeks?"
            );
            topCategories.push(google);
            const facebook = new CategoryThread(
                "5",
                "New Grad Jobs",
                "Are new grad positions for software engineers open at Facebook?"
            );
            topCategories.push(facebook);
            const resume = new CategoryThread(
               "6",
               "Resume Check",
               "Applying for SDE roles. Roast my resume!"
            )
            topCategories.push(resume);
            const django_project = new CategoryThread(
                "7",
                "Project Help",
                "Looking for a mentor to help me work on a Django, Flask project."
            )
            topCategories.push(django_project);
            const spring_boot = new CategoryThread(
                "8",
                "Project Help",
                "Looking for people to work on a Spring Boot, Java project. DM me if interested."
            )
            topCategories.push(spring_boot);

            res(topCategories);
        }, 2000);
    });
    return promise;
}

export async function getThreadById(ID: string): Promise<Thread> {
    const promise = new Promise<Thread>((res, rej) => {
        setTimeout(() => {
            const thread = {
                id: "1",
                views: 22,
                title: "Thread 1",
                body: 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                userName: "adam101",
                userID: "11",
                points: 11,
                createdOn: new Date(),
                lastModifiedOn: new Date(),
                threadItems: [
                    {
                        id: "1",
                        views: 22,
                        points: 2,
                        body: "ThreadItem 1",
                        userName: "jon",
                        userID: "2",
                        createdOn: new Date(),
                        threadID: "1",
                    },
                    {
                        id: "2",
                        views: 11,
                        points: 14,
                        body: "ThreadItem 2",
                        userName: "Linda",
                        userID: "4",
                        createdOn: new Date(),
                        threadID: "1",
                    },
                ],
                category: new Category("1", "Programming"),
            };

            res(thread);
        }, 2000);
    });
    return promise;
}

export async function getUserThreads(id: string): Promise<Array<Thread>> {
    const result = new Promise<Array<Thread>>((res) => {
        setTimeout(() => {
            const threads: Array<Thread> = [];
            threads.push({
                id: "1",
                views: 22,
                title: "Thread 1",
                body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                userName: "adam101",
                userID: "11",
                points: 11,
                createdOn: new Date(),
                lastModifiedOn: new Date(),
                threadItems: [
                    {
                        id: "1",
                        views: 22,
                        points: 2,
                        body: "ThreadItem 1",
                        userName: "Jon",
                        userID: "2",
                        createdOn: new Date(),
                        threadID: "1",
                    },
                ],
                category: new Category("1", "Programming"),
            });
            threads.push({
                id: "2",
                views: 2,
                title: "Thread 2",
                body:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                userName: "Tim_Sykes57",
                userID: "2",
                points: 55,
                createdOn: new Date(),
                lastModifiedOn: new Date(),
                threadItems: [
                    {
                        id: "1",
                        views: 22,
                        points: 2,
                        body: "ThreadItem 1",
                        userName: "jon",
                        userID: "2",
                        createdOn: new Date(),
                        threadID: "2",
                    },
                ],
                category: new Category("1", "Programming"),
            });

            res(threads);
        }, 2000);
    });
    return result;
}

