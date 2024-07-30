import dotenv from 'dotenv'
dotenv.config()


// A helper function to validate environment strings
function validateEnvironment(env: string | undefined): 'production' | 'development' {
    if (env === 'production' || env === 'development') {
        return env;
    }
    return 'development';
}

// create type of environments object
interface EnvConfigType {
    PORT : string | number,
    MONGOOSE_URI : string
}

export const environments : EnvConfigType = {
    PORT : process.env.PORT || 8080,
    MONGOOSE_URI : process.env.MONGOOSE_URI!,  
}
                 