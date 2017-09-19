<?php
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "nhdz";
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
$username=$_REQUEST["username"];
$telp=$_REQUEST["telp"];
$pwd=$_REQUEST["pwd"];

$sql = "INSERT INTO user (username,telp,pwd,add_time)
VALUES ('".$username."','".$telp."','".$pwd."','".time()."')";

$sql1="select * from user where telp ='".$telp."'";
$result=$conn->query($sql1);
if($result->num_rows==0){
	if ($conn->query($sql) === TRUE) {
	    echo '{"state":1,"username": '.$username.'}';
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
else{
	echo "已注册";
}
$conn->close();
?>
