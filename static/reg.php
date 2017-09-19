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
$telp=$_REQUEST["telp"];
$pwd=$_REQUEST["pwd"];

$sql="select * from user where telp ='".$telp."' and pwd ='".$pwd."'";
$result=$conn->query($sql);
if($result->num_rows==0){
    echo '用户名或密码错误';
} else{
    echo "成功";
}
$conn->close();
?>
