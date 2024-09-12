export const handleFavorite = (id) => {
    let favoritedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favoritedIds.includes(id)) {
        favoritedIds = favoritedIds.filter((_id) => _id !== id);
    } else {
        favoritedIds.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favoritedIds));
};

export const isFavorite = (id) => {
    let favoritedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    return favoritedIds.includes(id);
};

export const getFavoriteMembers = (members) => {
    const favoritedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    return members.filter((member) => favoritedIds.includes(member._id));
};
