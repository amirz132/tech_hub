import Thread from "./Thread";

export default class ThreadItem {
    constructor(
        public id: string,
        public views: number,
        public points: number,
        public body: string,
        public userName: string,
        public userID: string,
        public createdOn: Date,
        public threadID: string
    ) {}
}