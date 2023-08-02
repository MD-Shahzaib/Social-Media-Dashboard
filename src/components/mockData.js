const mockData = {
    metrics: {
        followers: 1000,
        posts: 50,
        likes: 5000,
        comments: 1000,
        engagementRate: 75,
    },
    chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        values: [100, 200, 150, 300, 250],
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        // datasets: [
        //     {
        //         label: 'Followers Growth',
        //         data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
        //         backgroundColor: 'rgba(75, 192, 192, 0.6)',
        //     },
        //     // Add more datasets for other metrics here
        // ],
    },
    user: {
        username: 'John Doe',
        email: 'johndoe@example.com',
    },
};

export default mockData;
