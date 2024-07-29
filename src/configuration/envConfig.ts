import dotenv from 'dotenv'
dotenv.config()


// A helper function to validate environment strings
function validateEnvironment(env: string | undefined): 'production' | 'development' {
    if (env === 'production' || env === 'development') {
        return env;
    }
    return 'development';
}


interface EnvConfigType {
    PORT : string | number,

    DB_NAME : string
    DB_USER : string
    DB_PASS : string
    DB_HOST : string
}

export const environments : EnvConfigType = {
    PORT : process.env.PORT || 8080,

    DB_NAME : validateEnvironment(process.env.ENVIRONMENT) === "development" ? process.env.DEV_DB_NAME! : process.env.PROD_DB_NAME!,

    DB_USER : validateEnvironment(process.env.ENVIRONMENT) === "development" ? process.env.DEV_DB_USER! : process.env.PROD_DB_USER!,

    DB_PASS : validateEnvironment(process.env.ENVIRONMENT) === "development" ? process.env.DEV_DB_PASS! : process.env.PROD_DB_PASS!,
    DB_HOST : validateEnvironment(process.env.ENVIRONMENT) === "development" ? process.env.DEV_DB_HOST! : process.env.PROD_DB_HOST!,
}
                 