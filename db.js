/**
 * Created by Vaidika Tibrewal on 4/19/2017.
 */
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'details',
    user: 'detailsuser',
    password: 'detailspswrd'
});

connection.connect();



module.exports = {

    fetchTo: function(cb) {
        connection.query('SELECT * FROM details_of_all', function (err, rows1) {

            if (err) throw err;

            cb(rows1);

        })
    },
        addto : function(id, cb) {
            connection.query('INSERT INTO cart_details (id,name,price,image) SELECT product_id,product_name,cost,img_path FROM details_of_all where ?', {product_id: id}, function (err, rows1) {

                if (err) throw err;

                cb(rows1)

            });

        },
    fetchTocart: function(cb) {
        connection.query('SELECT * FROM cart_details', function (err, rows1) {

            if (err) throw err;

            cb(rows1);

        })
    },

    removeto : function(id,cb){
        connection.query('delete from cart_details where ?' ,{id:id},function (err, rows1) {

            if (err) throw err;

            cb(rows1);

        })
    },

fetchbrand:function(brand,cb){
     connection.query('select * from details_of_all where ?',{brand_name:brand},function(err,rows){
         if (err) throw err;

         cb(rows);
     })
}
    }
