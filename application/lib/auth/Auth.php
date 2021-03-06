<?php
/*
 * @Author: your name
 * @Date: 2020-03-17 10:42:09
 * @LastEditTime: 2020-03-17 10:42:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \questionnaire\application\lib\auth\Auth.php
 */


namespace app\lib\auth;

/**
 * 接口访问权限枚举
 * 这种权限涉及是逐级式
 * 简单，但不够灵活
 * 最完整的权限控制方式是作用域列表式权限
 * 给每个令牌划分到一个SCOPE作用域，每个作用域
 * 可访问多个接口
 */
class Auth
{
    const User = 1;

    const Admin = 2;

}