var ManagerSQL = {  
                Adinsert:'INSERT INTO AdvertiseInfo(author,time,title,text,touxiang) VALUES(?,?,?,?,?)', 
                queryAll:'SELECT * FROM AdvertiseInfo',  
                Titledelete: 'delete from AdvertiseInfo where title=? and time=?',
		getUserById:'SELECT * FROM User WHERE uid = ? ',
		Userupdate:'update UserInfo set power=2 where PhoneNumber=? and address =? and name = ?',
		Userdown:'update UserInfo set power=0 where PhoneNumber=? and address =? and name = ?',
		getUserAll:'SELECT * FROM UserInfo',
		getOpenidbyPower:'SELECT openid,formId FROM UserInfo where power=2',
		Voteinsert:'INSERT INTO VoteInfo(date,time,voteType,voteTitle,voteText,files,optionList) VALUES(?,?,?,?,?,?,?)',
		getVoteAll:'select * from VoteInfo',
		getVoteBytitileAndtime: 'select optionList from VoteInfo where date=? and voteTitle=?',
		getNumbypower:'SELECT count(*) as status FROM UserInfo where power=2'
              };
 module.exports = ManagerSQL;
