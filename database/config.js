//Run in terminal to start postgres server
    //$ service postgresql start
//Run in terminal to dump local postgres schema    
    //$ PGPASSWORD=ENTER_PASSWORD pg_dump -Fc --no-acl --no-owner -h localhost -U ENTER_USERNAME mydb > ENTER_DESIRED_FILENAME.dump
module.exports.localPsqlConString = 'postgres://ENTER_USERNAME:ENTER_PASSWORD@localhost/ENTER_DATABASE_NAME';