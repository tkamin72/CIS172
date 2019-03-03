<?php

    if (isset($_POST['formtype']) && $_POST['formtype']== "contact")
    {

        if(isset($_POST['submit']))
        {
            try {
                    $dbh = new PDO("mysql:host=$hostname;dbname=tkamin",$username,$password);

                    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
                    $sql = "INSERT INTO contact_us (contact_us_id, contact_us_fname, contact_us_lname, contact_us_comments, contact_us_c_date, contact_us_u_date, contact_us_d_date, contact_us_email)
                            VALUES (NULL, '".$_POST['firstname']."', '".$_POST['lastname']."', '".$_POST['subject']."', NOW(), NULL, NULL, '".$_POST['email']. "')";
                    if ($dbh->query($sql))
                    {
                        //mail("tkamin72@gmail.com","Customer Message", "subject");
                        echo "<script type= 'text/javascript'>alert('Message Sent.');</script>";
                    }
                    else
                        {
                            echo "<script type= 'text/javascript'>alert('Message was not sent.');</script>";
                        }
                    $dbh = null;
            }
            catch(PDOException $e)
            {
                echo $e->getMessage();
            }
        }//end of if statement for sending message to database
    }
     else if(isset($_POST['formtype']== "register"))
        {
            if( 'customer_email'=='customer_email_check')
            {
               if ('customer_password'=='customer_password_check')
               {
                   if (isset($_POST['submit'])) {
                       try {
                           $dbh = new PDO("mysql:host=$hostname;dbname=tkamin", $username, $password);

                           $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
                           $sql = "INSERT INTO customer (customer_id, customer_fname, customer_lname, customer_email, customer_password, customer_phone, customer_bdate,customer_c_date, customer_u_date, customer_d_date)
                                VALUES (NULL, '" . $_POST['customer_fname'] . "', '" . $_POST['customer_lname'] . "', '" . $_POST['customer_email'] . "','" . $_POST['customer_password'] . "', '" . $_POST['customer_phone'] . "', '" . $_POST['customer_bdate'] . "',NOW(), NULL, NULL);
                            INSERT INTO cust_address (cust_address_id, customer_id, cust_street_address, cust_address_city, cust_address_state, cust_address_zip, cust_address_c_date, cust_address_u_date, cust_address_d_date)
                                VALUES (NULL, NULL, '" . $_POST['cust_street_address'] . "', '" . $_POST['cust_address_city'] . "', '" . $_POST['cust_address_state'] . "', '" . $_POST['cust_address_zip'] . "', NOW(), NULL, NULL)";
                           if ($dbh->query($sql)) {
                               //mail("tkamin72@gmail.com","Customer Message", "subject");
                               echo "<script type= 'text/javascript'>alert('Account created successfully!');</script>";
                           } else {
                               echo "<script type= 'text/javascript'>alert('Account was not created, please try again!');</script>";
                           }
                           $dbh = null;
                       } catch (PDOException $e) {
                           echo $e->getMessage();
                       }
                   }
                   else
                   {
                       echo "<script type= 'text/javascript'>alert('Passwords do not match!');</script>";
                   }
               }
               else
               {
                   echo "<script type= 'text/javascript'>alert('Email addresses do not match!');</script>";
               }
        }


    }