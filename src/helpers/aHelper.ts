import {OrclConnection} from "../utils/connection";
import {allQueries} from "../utils/queries"

export const queryHelper1 = async (data) => {
    try
    {
        let conn = await OrclConnection();
        let query = allQueries.Query1.replace("DBMS", data.Year)
        let result = await conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        }
    }
    catch(err)
    {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        }
    }
}

export const queryHelper2 = async (data) => {
    try
    {
        let conn = await OrclConnection();
        let query = allQueries.Query2.replace("DBMS", data.Year)
        let result = await conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        }
    }
    catch(err)
    {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        }
    }
}

export const queryHelper3 = async (data) => {
    try
    {
        let conn = await OrclConnection();
        let query = allQueries.Query3.replace("DBMS", data.Year)
        let result = await conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        }
    }
    catch(err)
    {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        }
    }
}

export const queryHelper4 = async (data) => {
    try
    {
        let conn = await OrclConnection();
        let query = allQueries.Query4.replace("DBMS", data.Year)
        let result = await conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        }
    }
    catch(err)
    {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        }
    }
}

export const queryHelper5 = async (data) => {
    try
    {
        let conn = await OrclConnection();
        let query = allQueries.Query5.replace("DBMS", data.Year)
        let result = await conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        }
    }
    catch(err)
    {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        }
    }
}

export const queryHelper6 = async (data) => {
    try
    {
        let conn = await OrclConnection();
        let query = allQueries.Query6.replace("DBMS", data.Year)
        let result = await conn.execute(query);
        conn.close();
        return {
            status: 200,
            isSuccess: true,
            data: result.rows
        }
    }
    catch(err)
    {
        return {
            status: 500,
            isSuccess: false,
            error: err.message
        }
    }
}