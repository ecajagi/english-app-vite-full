// JavaScript source code
const difficultyStats = {};
const topicVisits = {};

export function recordAnswer(topic, questionIndex, isCorrect) {
    const key = `${topic}-${questionIndex}`;
    if (!difficultyStats[key]) {
        difficultyStats[key] = { correct: 0, incorrect: 0 };
    }
    if (isCorrect) {
        difficultyStats[key].correct += 1;
    } else {
        difficultyStats[key].incorrect += 1;
    }
}

export function getMostIncorrectQuestions(topic, limit = 6) {
    const topicQuestions = Object.keys(difficultyStats)
        .filter((k) => k.startsWith(topic))
        .map((k) => ({
            questionIndex: parseInt(k.split('-')[1], 10),
            incorrect: difficultyStats[k].incorrect || 0,
            correct: difficultyStats[k].correct || 0,
        }));

    return topicQuestions
        .sort((a, b) => b.incorrect - a.incorrect)
        .slice(0, limit);
}

export function recordTopicVisit(topic) {
    if (!topicVisits[topic]) {
        topicVisits[topic] = 0;
    }
    topicVisits[topic]++;
}

export function getMostVisitedTopics() {
    return Object.entries(topicVisits).sort((a, b) => b[1] - a[1]);
}
