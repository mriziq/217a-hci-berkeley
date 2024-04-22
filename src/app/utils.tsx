// utils.js or wherever your business logic is kept
export const getMetricLabel = (metricType: any) => {
    switch (metricType) {
        case 'gender':
            return "Gender is Male";
        case 'age':
            return "Age is between 21 - 25";
        case 'location':
            return "Location is near Berkeley, CA";
        default:
            return "Unknown Metric";
    }
}
