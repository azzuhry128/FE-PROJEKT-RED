const refinedMessage = [
    {
        "message_id": '61c6205d-d8cf-4144-8ca3-c94464df3fe9',
        "chat_room_id": 'b91edb32-bbd1-433e-b81b-eef1776f53c0',
        'account_id': 'a39981e7-ecbe-4039-a258-1e056afec692',
        'content': 'goodnight terra',
        'image': null,
        'createdAt': '2023-12-10T12:23:47.000Z',
        'updatedAt': '2023-12-10T12:23:47.000Z',
    },
]

const refinedChatRoom = [
    {
        "chat_room_id": 'b91edb32-bbd1-433e-b81b-eef1776f53c0',
        'name': null,
        'image': null,
        'is_group_chat': false,
        "room_status": "active",
        "createdAt": "2023-12-10T12:20:33.000Z",
        "updatedAt": "2023-12-10T12:22:28.000Z"
    }
]

const refinedContact = [
    {
        'account_id': 'a39981e7-ecbe-4039-a258-1e056afec692',
        'username': 'dimas',
        'lastMessage': 'skip dulu lah',
        'tag': '#1861',
        'room': 'b91edb32-bbd1-433e-b81b-eef1776f53c0',
    },
    {
        'account_id': 'a39982e7-ecbe-4039-a258-1e056afec692',
        'username': 'farhan',
        'lastMessage': 'skip dulu lah',
        'tag': '#1862',
        'room': 'b91edb33-bbd1-433e-b81b-eef1776f53c0',
    },
    {
        'account_id': 'a39983e7-ecbe-4039-a258-1e056afec692',
        'username': 'nopal',
        'lastMessage': 'zeeb',
        'tag': '#1863',
        'room': 'b91edb34-bbd1-433e-b81b-eef1776f53c0',
    }
]

const refinedAccount = {
    "account_id": "a39981e7-ecbe-4039-a258-1e056afec692",
    "username": "dimas#1863",
    "password": "U2FsdGVkX19hWjJA933xkJVb1pGAFBYkvhVcBHLt9sY=",
    "online": true,
    "user_id": "75be326a-7cbe-4f71-bddc-c1798c02ed59",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJhMzk5ODFlNy1lY2JlLTQwMzktYTI1OC0xZTA1NmFmZWM2OTIiLCJpYXQiOjE3MDI1NTg1MzUsImV4cCI6MTcwMjY0NDkzNX0.-wgsmaBPiHcqsiZwMBJSsjyg1UpyLFyepV8AnYB5CkE",
    "createdAt": "2023-12-10T13:17:02.000Z",
    "updatedAt": "2023-12-14T12:55:35.000Z",
}

const refinedUser = {
    "user_id": "75be326a-7cbe-4f71-bddc-c1798c02ed59",
    "profile_name": "Dimas Rizz",
    "email": "rizqikurniawan1863@gmail.com",
    "image": "iadkjasdjbasckas.jpg",
    "phone": null,
    "bio": "Zeta is my wife, Zeta is my life !!!",
    "createdAt": "2023-12-10T13:10:58.000Z",
    "updatedAt": "2023-12-10T13:10:58.000Z"
}

const fakeUser = 
    {
        id: 529440,
        profile_name: "azzuhry128",
        email: "azzuhry128@gmail.com",
        image: 177013,
        phone: "082249034332",
    }

const fakeToken = {
    token: "asdfghl529440177013",
    valid: 73498696873246
}

const fakeMessages = [
    {
        id_message: 529440,
        sender: "azzuhry128",
        content: "what are you doing right now ?",
        chat_room_id: 112,
        timestamp: 10
    },
    {
        id_message: 177013,
        sender: "azzuhry46",
        content: "doing homework",
        chat_room_id: 112,
        timestamp: 11
    },
    {
        id_message: 529441,
        sender: "azzuhry128",
        content: "want to go to a cafe ?",
        chat_room_id: 112,
        timestamp: 12
    },
    {
        id_message: 177012,
        sender: "azzuhry46",
        content: "nah man, no money rn",
        chat_room_id: 112,
        timestamp: 13
    },
    {
        id_message: 464673,
        sender: "azzuhry128",
        content: "relax i'll pay",
        chat_room_id: 112,
        timestamp: 14
    }
] 

const fakeContacts = [
    {
        id: 529440,
        name: "elias",
        tag: "#7070",
        lastMessage: "i think so"
    },
    {
        id: 177013,
        name: "abraham",
        tag: "#4651",
        lastMessage: "tomorrow, perharps ?"
    },
    {
        id: 658354,
        name: "zach",
        tag: "#0867",
        lastMessage: "nah man i havent"
    }
]

export { fakeUser, fakeMessages, fakeToken, fakeContacts, refinedAccount, refinedChatRoom, refinedMessage, refinedUser, refinedContact }