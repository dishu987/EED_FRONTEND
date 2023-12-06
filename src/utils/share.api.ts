export const handleShare = (url: string, title: string) => {
    if (navigator.share) {
        navigator
            .share({
                title: title,
                url: url,
            })
            .then(() => console.log("Shared successfully"))
            .catch((error) => console.error("Error sharing:", error));
    } else {
        console.log("Web Share API not supported.");
    }
};