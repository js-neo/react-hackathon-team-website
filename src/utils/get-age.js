import moment from "moment";

const getAge = (data) => {
    const formatData = data.replace(/-/g, "");
    const age = moment(formatData, "YYYYMMDD").fromNow().replace("ago", "old");

    return age;
};

export default getAge;
