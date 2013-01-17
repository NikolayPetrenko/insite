<?php defined('SYSPATH') or die('No direct access allowed.');
$data['user_menu']  = array(                                
        "edit_page" 	=> array(
                                        'name'          => "Edit page",
                                        'url'    	=> 'users/edit',
                                        'status'	=> 0
                                ),
        "logout"	=> array(
                                        'name'          => "Logout",
                                        'url'		=> "session/logout",
                                        'status'	=> 0
                                )
);

return $data;