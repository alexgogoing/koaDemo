import mysql from 'mysql';
import {config} from '../config';

const pool = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
})

let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`;

export let query = function(sql, values){
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection){
            if(err){
                reject(err);
            }else{
                connection.query(sql, values, (err, rows) => {
                    if(err){
                        reject(err);
                    }else{
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })
}

let createTable = function(sql){
    return query(sql, []);
}

// 建表
createTable(users);