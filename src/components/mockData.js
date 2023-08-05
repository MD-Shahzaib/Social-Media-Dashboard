// Images.
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const mockData = {
    metrics: {
        followers: 1000,
        posts: 50,
        likes: 5000,
        comments: 1000,
        engagementRate: "75%",
    },
    chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        values: [100, 200, 150, 300, 250],
    },
    user: {
        username: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
        city: 'New York',
        country: 'USA',
        occupation: 'Software Engineer',
        hobbies: ['Coding', 'gaming'],
        isSubscribed: true,
        profilePicture: 'https://example.com/profile-pic.jpg',
        socialMedia: {
            twitter: '@johndoe',
            instagram: 'johndoe_',
            youtube: 'johndoe_1'
        }
    },
    overview: [
        {
            title: "Page Views",
            icon: facebook,
            count: 87,
            percentage: 3,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Likes",
            icon: facebook,
            count: 52,
            percentage: -2,
            color: "text-rose-600",
            percentageIcon: down,
        },
        {
            title: "Likes",
            icon: instagram,
            count: 5462,
            percentage: 2257,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Profile Views",
            icon: instagram,
            count: "52k",
            percentage: 1375,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Retweets",
            icon: twitter,
            count: 117,
            percentage: 303,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Likes",
            icon: instagram,
            count: 507,
            percentage: 553,
            color: "text-emerald-600",
            percentageIcon: up,
        },
        {
            title: "Likes",
            icon: youtube,
            count: 107,
            percentage: -19,
            color: "text-rose-600",
            percentageIcon: down,
        },
        {
            title: "Total Views",
            icon: youtube,
            count: 1407,
            percentage: -12,
            color: "text-rose-600",
            percentageIcon: down,
        },
    ],
    followers: [
        {
            icon: facebook,
            username: "nathanf",
            count: 1987,
            countLabel: "Followers",
            todayCount: 12,
            rank: up,
            highlighter: "border-blue-600",
        },
        {
            icon: instagram,
            username: "realnathanf",
            count: "11K",
            countLabel: "Followers",
            todayCount: 1099,
            rank: up,
            highlighter: "border-pink-500",
        },
        {
            icon: twitter,
            username: "nathanf",
            count: 1044,
            countLabel: "Followers",
            todayCount: 99,
            rank: up,
            highlighter: "border-blue-500",
        },
        {
            icon: youtube,
            username: "NathanF",
            count: 8239,
            countLabel: "subscribers",
            todayCount: 144,
            rank: down,
            highlighter: "border-red-700",
        },
    ]
};

export default mockData;