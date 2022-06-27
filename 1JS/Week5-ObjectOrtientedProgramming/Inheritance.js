//* both classes have to send notification and find users with a specific status

class NotificationSender {
    constructor(status) {
        this.status = status;
    }

    //* adding method
    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
    //* adding method
    findUsersWithStatus(status) {
        let users = getUsers(status);
        return users;
    }
}

//* extends keyword is used to inherit from another class

class PromotionSender extends NotificationSender {
    constructor(status) {
        //* super refers to the parent class
        //* when followed by (), refers to parent class constructor
        //* super is like "this."
        super(status);
    }
    //! MOVED TO NotificaitonSender class
    // //* adding method
    // sendNotification(notification) {
    //     console.log('Sending: ' + notification);
    // }
    // //* adding method
    // findUsersWithStatus(status) {
    //     let users = getUsers(status);
    //     return users;
    // }

    //* adding method
    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
        return 0;
    }
}

//* extends keyword is used to inherit from another class

class CollectionsSender extends NotificationSender {
    constructor(status) {
        //* super refers to the parent class
        //* when followed by (), refers to parent class constructor
        //* super is like "this."
        super(status);
    }

    //! MOVED TO NotificaitonSender class
    // sendNotification(notification) {
    //     console.log('Sending: ' + notification);
    // }

    // findUsersWithStatus(status) {
    //     let users = getUsers(status);
    //     return users;
    // }

    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if (status === 'DELINQUENT') {
            return 25;
        }
        return 5;
    }
}

//* creating a new instance
let collectionsSender = new CollectionsSender('OVERDUE');
//* sendNotification is not in CollectionSender class
//* However, we inherited it from NotificationSender, therefore we can use it
collectionsSender.sendNotification('this is a test collections notification.');

/* If we look at both classes we can see a lot of similar code.
SendNotifications is identical, same with FindUsersWithStatus.
We can extract common code into a parent class and
inherit that into child classes.
If we put the core code in one place we only have to make changes
in one place as opposed to multiple places.
 */