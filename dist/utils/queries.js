"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allQueries = void 0;
let allQueries = {
    Query1: `SELECT DISTINCT wc.weather_condition AS Weather_Condition, 
    i.City AS City, 
    i.State AS State, 
    EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')) AS Year, 
    COUNT(i.Incident_ID) AS Number_of_Accidents, 
    ROUND(AVG(i.Severity), 2) AS Average_Severity, 
    ROUND((COUNT(i.Incident_ID) - (SELECT AVG(Number_of_Accidents) 
    FROM (SELECT COUNT(i.Incident_ID) AS Number_of_Accidents 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.City, i.State))) * 100 / (SELECT AVG(Number_of_Accidents) 
    FROM (SELECT COUNT(i.Incident_ID) AS Number_of_Accidents 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.City, i.State)), 2) AS Percentage_Diff_AvgAccidents, 
    ROUND((AVG(i.Severity) - (SELECT AVG(Average_Severity) 
    FROM (SELECT AVG(i.Severity) AS Average_Severity 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.City, i.State))) * 100 / (SELECT AVG(Average_Severity) 
    FROM (SELECT AVG(i.Severity) AS Average_Severity 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.City, i.State)), 2) AS Percentage_Diff_AvgSeverity 
    FROM Incident i 
    JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    JOIN Weather w ON i.Weather_ID = w.Weather_ID 
    JOIN Weather_Condition wc ON w.Weather_Condition_ID = wc.Weather_Condition_ID 
    WHERE wc.Weather_Condition IS NOT NULL AND  EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')) in (DBMS)
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.City, i.State, wc.weather_condition ORDER BY Year, State, City, Weather_Condition`,
    Query2: `SELECT i.State AS State, 
    EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')) AS Year, 
    CASE WHEN EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')) IN (2020, 2021, 2022) THEN 'Yes' ELSE 'No' END AS COVID_Status, 
    COUNT(DISTINCT i.Incident_ID) AS Number_of_Accidents, 
    ROUND(AVG(i.Severity), 2) AS Average_Severity, 
    ROUND((COUNT(DISTINCT i.Incident_ID) - (SELECT AVG(Number_of_Accidents) FROM (SELECT COUNT(DISTINCT i.Incident_ID) AS Number_of_Accidents 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.State))) * 100 / (SELECT AVG(Number_of_Accidents) 
    FROM (SELECT COUNT(DISTINCT i.Incident_ID) AS Number_of_Accidents 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.State)), 2) AS Percentage_Diff_AvgAccidents, 
    ROUND((AVG(i.Severity) - (SELECT AVG(Average_Severity) 
    FROM (SELECT AVG(i.Severity) AS Average_Severity 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.State))) * 100 / (SELECT AVG(Average_Severity) 
    FROM (SELECT AVG(i.Severity) AS Average_Severity FROM Incident i 
    JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), 
    i.State)), 2) AS Percentage_Diff_AvgSeverity 
    FROM Incident i JOIN Incident_times it ON i.Incident_ID = it.Incident_ID 
    GROUP BY EXTRACT(YEAR FROM TO_DATE(it.StartTime, 'YYYY-MM-DD HH24:MI')), i.State
    ORDER BY Year, State;`
};
exports.allQueries = allQueries;
//# sourceMappingURL=queries.js.map