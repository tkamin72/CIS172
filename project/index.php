
<?php
/**
 * Trevor Kamin
 * CIS 222 Project 1
 *
 * This website was used as my PHP w/ MYSQL course with professor Banks. It will
 *be used in a production for Fancie That Candles. This is a complete online
 * store, and will be fully functional when completed.
 *
 * PHP version 5.4.45
 *
 * @package    Fancie That Candles
 * @author     Trevor Kamin
 * @copyright  2018 Fancie That Candles
 * @version    10/09/2018
 * @link       https://cislinux.hfcc.edu/~tkamin/fancieThatCandles/index.php
 * 
 * @grade       150 / 150
 */

  //  require ('../../creds.php');
  //  require ('../../creds2.php');

    require('includes/nav.phtml');
    require('includes/header.phtml');
    //require('includes/form_handler.php');


    if(isset($_REQUEST['page']))
    {
       if($_REQUEST['page']=='contact')
       {
           require('includes/contact.phtml');
       }
       elseif ($_REQUEST['page']=='login')
       {
           require ('includes/login.phtml');
       }
       elseif ($_REQUEST['page']=='code')
       {
           require('includes/code.phtml');
       }
       elseif ($_REQUEST['page']=='home')
       {
           require ('includes/home.phtml');
       }
       elseif ($_REQUEST['page']=='register')
       {
           require ('includes/register.phtml');
       }
       else
       {
           require ('includes/404page.phtml');
       }
    }
    else
    {
        require ('includes/home.phtml');
    }

    require('includes/footer.phtml');
