import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL
    }
);

const titleToSlug = (title) => {
    return title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    // Mobile Phone // mobile-phone
}

const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    // Set the time of both dates to midnight to only consider the date part
    date.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return 'Today';
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else {
        return `${diffDays} days ago`;
    }
}

export { titleToSlug, timeAgo, axiosInstance };