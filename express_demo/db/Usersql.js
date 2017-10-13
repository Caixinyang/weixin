var UserSQL = {  
		//注册
                Userinsert:'INSERT INTO UserInfo(PhoneNumber,name,address,power,openid) VALUES(?,?,?,?,?)', 
                queryAll:'SELECT * FROM User',  
		selectByOpenid:'SELECT * FROM UserInfo where openid = ?',
                getUserById:'SELECT * FROM User WHERE uid = ? ',
		Commentinsert: 'INSERT INTO CommentInfo(advertiseId,submit_time,text,author) VALUES((SELECT id from AdvertiseInfo where title=? and time=?),?,?,?)',
		getCommentByAdvertiseId: 'SELECT * FROM CommentInfo WHERE  AdvertiseId= (SELECT id from AdvertiseInfo where title=? and time=?)',
        	getAdvertiseIdBytitleAndtime:'SELECT id from AdvertiseInfo where title=? and time=?',      
		formIdupdate:'UPDATE UserInfo set formId= ? where openid=?'
	};
 module.exports = UserSQL;
