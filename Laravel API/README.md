# 1 line update

`git checkout develop && git pull origin develop && composer install && php artisan migrate:refresh && php artisan passport:install && php artisan migrate && npm install && npm run dev`


# ENV file

```
APP_NAME=YikYak
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=lo_notes
DB_USERNAME=root
DB_PASSWORD=root

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```



# AUTH ENDPOINTS


### Login

POST: http://lo-notes.api/api/login


Request

```
curl --location --request POST 'http://lo-notes.api/api/login' \
--header 'Content-Type: application/json' \
--form 'email=t3@emaail.com' \
--form 'password=test1234'
```

Return success

```
{
    "success": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDM4MDVhMmYxZjc5ZTBmZDJiNzBmOGFjNDUwZmI3MmE4MDZmOTE5ODFlOTI4ZDE4MjlmM2E4NGEyZmQzYTZiYmFkZjZlN2MxNDM0ZDliYzUiLCJpYXQiOjE1ODMzMzY0NTMsIm5iZiI6MTU4MzMzNjQ1MywiZXhwIjoxNjE0ODcyNDUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X84dIDj4BnFKOL0T5EVJ7tvCaJesxBSvzM1g5pyff1nI3B8xp3riH3_Hu7r6SpPWKOfRTrj_u55tRmZWgWELPlGB6jsvdj5BFT1Kjk7LZKa-orQH4aC6Ftne-mm67iwvmQ3lSQ-22IH9Fh2oOO6hrQ9duuUcxpJln0GYCdCStmNz2op7KDHZYztITimWSmnuxbE6C24D6bwD0DDgC2hvvgbuKVw9yOwBU556ZwCWwEXNXLYizkljugBXlr_QOc4mBy_C7jHEBY_8r4M_PeYc0oWrDxly-LKlOxtyjQpPyjEXrIgwWZU6U54j9I27_tEIdabrUxAUM61-Vao-z7k1CI1NY_7l_MX6dQe30VjJgswMSLhj9uE5zWDHVXMPnluVOOf6sodnTrwLWzOiT9KOX2bui7RPwxB-MKqHXUp_DrXLD_ve-iuhPwLh-ixdJSzChiWxJUbdBQ1lJ62DsqYVXw_CHJctmUeAaMf5vjeakY7Yl8JkhE5uKOy8SbmLg3uNUDxT3xXugfX5-s1K8HuSQn4LiwswpoWDun0rwoKxEsxfs2Hp0eR9LTYOHrYvGcFTpOEGJCrpK0ygDS-tSyLG0kpvDCLzxfWkC-weO6xY7cbo_7NmAKs-BJg0g3RIzRkM5hoGiQpu5OFXN3r6tqL2K89fKKXJXlA3Kdejw0ISMww"
    }
}
```

Return fail

```
{
    "error": "{STRING}"
}
```


### Register

POST: http://lo-notes.api/api/register


Request

```
curl --location --request POST 'http://lo-notes.api/api/register' \
--header 'Authorization: Bearer eyJ0eXAiaOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTkzZTZhNzk0NDViMjI1MzEyZWM0YmJiNTg1ZDA0MjJhZjUzODRjZjM1NWU2MzM4NmMwOWVjMDAwZTZlMGJlZDljYzZmYTdlZmY4NzRhMGMiLCJpYXQiOjE1ODMzMjA2MjksIm5iZiI6MTU4MzMyMDYyOSwiZXhwIjoxNjE0ODU2NjI5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.GxqeYABES2x37UhsTlVQfoAFDlDUZ_x0FAy6qDn26CEmcN1azpD44dql-Gom9aQAnF5C9MAMcVL_mL0FIYttpCJ13b4qMtz3ohTYAqhY9OJ52BmuZQdWWwL2t-2qOmuyHJLVeMOd4GlvD2Kg4WOYklZREvCdDNk0fsbl4XqNJAs_aMD3daCmSP-hYJ2MwZNSSD1SiXKZPSlXW-BRJA7HzROeoPDkvfYTWfEr5J18_xlVIWnhDXrAxdzo3gY4tosyEb60She2kBhcT0bIteR4ZTnLgGo8DNHAsYYfMQT6Z0Ft6uyMLW7baYyZa7qyH3C7K2ZS1tMzd9qBb6Q3dmfLLy5H3ouyEXep25ZD_lYRH6SYbH2SJnK3mDYYtKK5sfQZMBl1oDtiE_gYhopHlPjePQCWgl0ydqOIf_624Bl1lZbhI8w1hijDAwStZd94cmJcaUlTEDnGuYwFtbBZdGURNjbIFofHrBVLKTQIkmCxev3yQCQ9ByL3QIsqSrwBCKn0nL0vsSCGweORGf4shBDMvbOXPZHGpyVucgCaCmzRndusQ-c-CuFIPKgFxkZ9EtS4-GDEhRYimtKJv0cgN0xCAQIw97G52pBkG8vY7gjo5GzATwxjw_QMbUwLSIQ-pdOoGuK_eQcSgyBF1AePklLRchKhCu8lhaRjvqFcc_SdGyI' \
--header 'Accept: application/json' \
--header 'Content-Type: multipart/form-data; boundary=--------------------------439817142839445213449862' \
--form 'name=hendrikus' \
--form 'email=t3@email.com' \
--form 'password=test1234' \
--form 'c_password=test1234'
```

Return success

```
{
    "success": {
        "name": "hendrikus"
    }
}
```

Return fail

```
{
    "error": "{STRING}"
}
```

### Reset Password

POST: http://lo-notes.api/api/reset-password


Request

```
curl --location --request POST 'http://lo-notes.api/api/reset-password' \
--header 'Accept: application/json' \
--header 'Content-Type: multipart/form-data; boundary=--------------------------132416450051932117674664' \
--form 'email=t3@email.com'
```

Return success

```
{
    "message": "We have emailed your password reset link!"
}
```

Return fail

```
{
    "error": "{STRING}"
}
```


### Logout

GET: http://lo-notes.api/api/logout


Request

```
curl --location --request GET 'http://lo-notes.api/api/logout' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDM4MDVhMmYxZjc5ZTBmZDJiNzBmOGFjNDUwZmI3MmE4MDZmOTE5ODFlOTI4ZDE4MjlmM2E4NGEyZmQzYTZiYmFkZjZlN2MxNDM0ZDliYzUiLCJpYXQiOjE1ODMzMzY0NTMsIm5iZiI6MTU4MzMzNjQ1MywiZXhwIjoxNjE0ODcyNDUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X84dIDj4BnFKOL0T5EVJ7tvCaJesxBSvzM1g5pyff1nI3B8xp3riH3_Hu7r6SpPWKOfRTrj_u55tRmZWgWELPlGB6jsvdj5BFT1Kjk7LZKa-orQH4aC6Ftne-mm67iwvmQ3lSQ-22IH9Fh2oOO6hrQ9duuUcxpJln0GYCdCStmNz2op7KDHZYztITimWSmnuxbE6C24D6bwD0DDgC2hvvgbuKVw9yOwBU556ZwCWwEXNXLYizkljugBXlr_QOc4mBy_C7jHEBY_8r4M_PeYc0oWrDxly-LKlOxtyjQpPyjEXrIgwWZU6U54j9I27_tEIdabrUxAUM61-Vao-z7k1CI1NY_7l_MX6dQe30VjJgswMSLhj9uE5zWDHVXMPnluVOOf6sodnTrwLWzOiT9KOX2bui7RPwxB-MKqHXUp_DrXLD_ve-iuhPwLh-ixdJSzChiWxJUbdBQ1lJ62DsqYVXw_CHJctmUeAaMf5vjeakY7Yl8JkhE5uKOy8SbmLg3uNUDxT3xXugfX5-s1K8HuSQn4LiwswpoWDun0rwoKxEsxfs2Hp0eR9LTYOHrYvGcFTpOEGJCrpK0ygDS-tSyLG0kpvDCLzxfWkC-weO6xY7cbo_7NmAKs-BJg0g3RIzRkM5hoGiQpu5OFXN3r6tqL2K89fKKXJXlA3Kdejw0ISMww' \
--header 'Accept: application/json'
```

Return success

```
{
    "success": true
}
```

Return fail

```
{
    "message": "{STRING}"
}
```

### User Details

GET: http://lo-notes.api/api/details


Request

```
curl --location --request GET 'http://lo-notes.api/api/details' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDM4MDVhMmYxZjc5ZTBmZDJiNzBmOGFjNDUwZmI3MmE4MDZmOTE5ODFlOTI4ZDE4MjlmM2E4NGEyZmQzYTZiYmFkZjZlN2MxNDM0ZDliYzUiLCJpYXQiOjE1ODMzMzY0NTMsIm5iZiI6MTU4MzMzNjQ1MywiZXhwIjoxNjE0ODcyNDUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X84dIDj4BnFKOL0T5EVJ7tvCaJesxBSvzM1g5pyff1nI3B8xp3riH3_Hu7r6SpPWKOfRTrj_u55tRmZWgWELPlGB6jsvdj5BFT1Kjk7LZKa-orQH4aC6Ftne-mm67iwvmQ3lSQ-22IH9Fh2oOO6hrQ9duuUcxpJln0GYCdCStmNz2op7KDHZYztITimWSmnuxbE6C24D6bwD0DDgC2hvvgbuKVw9yOwBU556ZwCWwEXNXLYizkljugBXlr_QOc4mBy_C7jHEBY_8r4M_PeYc0oWrDxly-LKlOxtyjQpPyjEXrIgwWZU6U54j9I27_tEIdabrUxAUM61-Vao-z7k1CI1NY_7l_MX6dQe30VjJgswMSLhj9uE5zWDHVXMPnluVOOf6sodnTrwLWzOiT9KOX2bui7RPwxB-MKqHXUp_DrXLD_ve-iuhPwLh-ixdJSzChiWxJUbdBQ1lJ62DsqYVXw_CHJctmUeAaMf5vjeakY7Yl8JkhE5uKOy8SbmLg3uNUDxT3xXugfX5-s1K8HuSQn4LiwswpoWDun0rwoKxEsxfs2Hp0eR9LTYOHrYvGcFTpOEGJCrpK0ygDS-tSyLG0kpvDCLzxfWkC-weO6xY7cbo_7NmAKs-BJg0g3RIzRkM5hoGiQpu5OFXN3r6tqL2K89fKKXJXlA3Kdejw0ISMww' \
--header 'Accept: application/json'
```

Return success

```
{
    "success": {
        "id": 1,
        "name": "hendrikus",
        "email": "t3@email.com",
        "email_verified_at": "2020-03-04T15:10:27.000000Z",
        "created_at": "2020-03-04T15:10:18.000000Z",
        "updated_at": "2020-03-04T15:10:27.000000Z"
    }
}
```

Return fail

```
{
    "message": "{STRING}"
}
```


# NOTES ENDPOINTS

### Create note

POST: http://lo-notes.api/api/notes

#### required field
* 'title' => 'required',
* 'description' => 'required',
* 'lat' => 'required',
* 'lng' => 'required',

Request

```
curl --location --request POST 'http://lo-notes.api/api/notes' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzRkNjJkNTM2OTk1NzJmMzFjMTljZDVkMTU0MjdjZTA1ZjIwZDRjNDY3NzA4NzdjNjgxYmZhZDJiYmEwODY2YzFjOTI3YTZhMmQ1MWZiMDgiLCJpYXQiOjE1ODM0MTY2MjIsIm5iZiI6MTU4MzQxNjYyMiwiZXhwIjoxNjE0OTUyNjIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m5NINDwp01dwNicPES-3S1fW6dG1Z4j0IErBugQ45SpT1f_N5PKdAXmt4h4z2zFUEFyZofEoi1r_Y_oNET2rLKJpIxISfuA9g7mn-Fisx4KU-Vag7BwLmj3ZVGHPmnyKynJTf-MzZa3kt48caCShn2GwB_UmjRk31V4e_7QDfMfrYiruRvh08BVlmb86i_gEFaOzPrCN3RWKREH3EJVmHh2ZTXYh_wUU5wU16DK76FNyJOukbxu3E5Mqgbp6XE_cnEDQoVRbUH4IXAmmWjytJaSsrj-NhhKOTZyYFFrhZsAk5-d0ujGaSrc4YzooKIVdqV-rjy-269gD0i2MsJfVwXieKhmuXMVWDzxR3GQ6x6h4gM1kU0gtF3J-8ypDCl7zC_jZ6w5k8YvkR1tN4B_oR_XW-dDOGSpORiBzCxAwHtL-1mWnHf2zHoP-xgQdT2w7CdXIOB2W0TUTfszM3jOGkr3_qet6GNkR62AJU6I-CKILO5vJA9GCOQiYVKKs4Tf__TC0krmqG5mzUMNvwCHCs2ii9Uqy27cB7HuuNwQZNneZpmsdC3PN3h7gA4iGAUGE78-jB5hvThNLxdWwqgU-FndsIEr5x7bb1SAviv7FQ5Z6gRRBU0niJx_l33rZu9k4Mtl8faFNP_ToBaMOwD9aJnndNEe9F0ouXM8MOku8rzY' \
--header 'Accept: application/json' \
--header 'Content-Type: multipart/form-data; boundary=--------------------------212314773192485180911312' \
--form 'title=Title' \
--form 'description=Description' \
--form 'lat=35.922027' \
--form 'lng=14.487415'
```

Return success

```
{
    "success": {NOTE_ID}
}
```

Return fail

```
{
    "message|error": "{STRING}"
}
```

### Update note

PUT: http://lo-notes.api/api/notes/{note_id}

#### required field
* {note_id}

Request

```
curl --location --request PUT 'http://lo-notes.api/api/notes/{node_id}' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzRkNjJkNTM2OTk1NzJmMzFjMTljZDVkMTU0MjdjZTA1ZjIwZDRjNDY3NzA4NzdjNjgxYmZhZDJiYmEwODY2YzFjOTI3YTZhMmQ1MWZiMDgiLCJpYXQiOjE1ODM0MTY2MjIsIm5iZiI6MTU4MzQxNjYyMiwiZXhwIjoxNjE0OTUyNjIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m5NINDwp01dwNicPES-3S1fW6dG1Z4j0IErBugQ45SpT1f_N5PKdAXmt4h4z2zFUEFyZofEoi1r_Y_oNET2rLKJpIxISfuA9g7mn-Fisx4KU-Vag7BwLmj3ZVGHPmnyKynJTf-MzZa3kt48caCShn2GwB_UmjRk31V4e_7QDfMfrYiruRvh08BVlmb86i_gEFaOzPrCN3RWKREH3EJVmHh2ZTXYh_wUU5wU16DK76FNyJOukbxu3E5Mqgbp6XE_cnEDQoVRbUH4IXAmmWjytJaSsrj-NhhKOTZyYFFrhZsAk5-d0ujGaSrc4YzooKIVdqV-rjy-269gD0i2MsJfVwXieKhmuXMVWDzxR3GQ6x6h4gM1kU0gtF3J-8ypDCl7zC_jZ6w5k8YvkR1tN4B_oR_XW-dDOGSpORiBzCxAwHtL-1mWnHf2zHoP-xgQdT2w7CdXIOB2W0TUTfszM3jOGkr3_qet6GNkR62AJU6I-CKILO5vJA9GCOQiYVKKs4Tf__TC0krmqG5mzUMNvwCHCs2ii9Uqy27cB7HuuNwQZNneZpmsdC3PN3h7gA4iGAUGE78-jB5hvThNLxdWwqgU-FndsIEr5x7bb1SAviv7FQ5Z6gRRBU0niJx_l33rZu9k4Mtl8faFNP_ToBaMOwD9aJnndNEe9F0ouXM8MOku8rzY' \
--header 'Accept: application/json' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'description=New Desc!'
```

Return success

```
{
    "success": true
}
```

Return fail

```
{
    "message|error": "{STRING}"
}
```

### Delete note

DELETE: http://lo-notes.api/api/notes/{note_id}

#### required field
* {note_id}

Request

```
curl --location --request DELETE 'http://lo-notes.api/api/notes/{node_id}' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzRkNjJkNTM2OTk1NzJmMzFjMTljZDVkMTU0MjdjZTA1ZjIwZDRjNDY3NzA4NzdjNjgxYmZhZDJiYmEwODY2YzFjOTI3YTZhMmQ1MWZiMDgiLCJpYXQiOjE1ODM0MTY2MjIsIm5iZiI6MTU4MzQxNjYyMiwiZXhwIjoxNjE0OTUyNjIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m5NINDwp01dwNicPES-3S1fW6dG1Z4j0IErBugQ45SpT1f_N5PKdAXmt4h4z2zFUEFyZofEoi1r_Y_oNET2rLKJpIxISfuA9g7mn-Fisx4KU-Vag7BwLmj3ZVGHPmnyKynJTf-MzZa3kt48caCShn2GwB_UmjRk31V4e_7QDfMfrYiruRvh08BVlmb86i_gEFaOzPrCN3RWKREH3EJVmHh2ZTXYh_wUU5wU16DK76FNyJOukbxu3E5Mqgbp6XE_cnEDQoVRbUH4IXAmmWjytJaSsrj-NhhKOTZyYFFrhZsAk5-d0ujGaSrc4YzooKIVdqV-rjy-269gD0i2MsJfVwXieKhmuXMVWDzxR3GQ6x6h4gM1kU0gtF3J-8ypDCl7zC_jZ6w5k8YvkR1tN4B_oR_XW-dDOGSpORiBzCxAwHtL-1mWnHf2zHoP-xgQdT2w7CdXIOB2W0TUTfszM3jOGkr3_qet6GNkR62AJU6I-CKILO5vJA9GCOQiYVKKs4Tf__TC0krmqG5mzUMNvwCHCs2ii9Uqy27cB7HuuNwQZNneZpmsdC3PN3h7gA4iGAUGE78-jB5hvThNLxdWwqgU-FndsIEr5x7bb1SAviv7FQ5Z6gRRBU0niJx_l33rZu9k4Mtl8faFNP_ToBaMOwD9aJnndNEe9F0ouXM8MOku8rzY' \
--header 'Accept: application/json' \
--header 'Content-Type: application/x-www-form-urlencoded'
```

Return success

```
{
    "success": true
}
```

Return fail

```
{
    "message|error": "{STRING}"
}
```

### View note

GET: http://lo-notes.api/api/notes/{note_id}

#### required field
* {note_id}

Request

```
curl --location --request GET 'http://lo-notes.api/api/notes/{node_id}' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzRkNjJkNTM2OTk1NzJmMzFjMTljZDVkMTU0MjdjZTA1ZjIwZDRjNDY3NzA4NzdjNjgxYmZhZDJiYmEwODY2YzFjOTI3YTZhMmQ1MWZiMDgiLCJpYXQiOjE1ODM0MTY2MjIsIm5iZiI6MTU4MzQxNjYyMiwiZXhwIjoxNjE0OTUyNjIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m5NINDwp01dwNicPES-3S1fW6dG1Z4j0IErBugQ45SpT1f_N5PKdAXmt4h4z2zFUEFyZofEoi1r_Y_oNET2rLKJpIxISfuA9g7mn-Fisx4KU-Vag7BwLmj3ZVGHPmnyKynJTf-MzZa3kt48caCShn2GwB_UmjRk31V4e_7QDfMfrYiruRvh08BVlmb86i_gEFaOzPrCN3RWKREH3EJVmHh2ZTXYh_wUU5wU16DK76FNyJOukbxu3E5Mqgbp6XE_cnEDQoVRbUH4IXAmmWjytJaSsrj-NhhKOTZyYFFrhZsAk5-d0ujGaSrc4YzooKIVdqV-rjy-269gD0i2MsJfVwXieKhmuXMVWDzxR3GQ6x6h4gM1kU0gtF3J-8ypDCl7zC_jZ6w5k8YvkR1tN4B_oR_XW-dDOGSpORiBzCxAwHtL-1mWnHf2zHoP-xgQdT2w7CdXIOB2W0TUTfszM3jOGkr3_qet6GNkR62AJU6I-CKILO5vJA9GCOQiYVKKs4Tf__TC0krmqG5mzUMNvwCHCs2ii9Uqy27cB7HuuNwQZNneZpmsdC3PN3h7gA4iGAUGE78-jB5hvThNLxdWwqgU-FndsIEr5x7bb1SAviv7FQ5Z6gRRBU0niJx_l33rZu9k4Mtl8faFNP_ToBaMOwD9aJnndNEe9F0ouXM8MOku8rzY' \
--header 'Accept: application/json' \
--header 'Content-Type: application/x-www-form-urlencoded'
```

Return success

```
{
    "id": 1,
    "user_id": 1,
    "title": "Title",
    "description": "New Desc!",
    "lat": 35.922027,
    "lng": 14.487415,
    "cos_radians_lat": 0.8098161534,
    "radians_lng": 0.2528530919,
    "sin_radians_lat": 0.5866837288,
    "created_at": "2020-03-05T13:57:27.000000Z",
    "updated_at": "2020-03-05T14:13:53.000000Z",
    "deleted_at": null,
    "user": {
        "id": 1,
        "name": "hendrikus",
        "email": "t1@email.com",
        "email_verified_at": "2020-03-05T13:56:57.000000Z",
        "created_at": "2020-03-05T13:56:52.000000Z",
        "updated_at": "2020-03-05T13:56:57.000000Z"
    }
}
```

Return fail

```
{
    "message|error": "{STRING}"
}
```

### List of notes

GET: http://lo-notes.api/api/notes?lat={lat}&lng={lng}

#### required field
* {lat}
* {lng}

Request

```
curl --location --request GET 'http://lo-notes.api/api/notes?lat=35.910022&lng=14.481842' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzRkNjJkNTM2OTk1NzJmMzFjMTljZDVkMTU0MjdjZTA1ZjIwZDRjNDY3NzA4NzdjNjgxYmZhZDJiYmEwODY2YzFjOTI3YTZhMmQ1MWZiMDgiLCJpYXQiOjE1ODM0MTY2MjIsIm5iZiI6MTU4MzQxNjYyMiwiZXhwIjoxNjE0OTUyNjIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m5NINDwp01dwNicPES-3S1fW6dG1Z4j0IErBugQ45SpT1f_N5PKdAXmt4h4z2zFUEFyZofEoi1r_Y_oNET2rLKJpIxISfuA9g7mn-Fisx4KU-Vag7BwLmj3ZVGHPmnyKynJTf-MzZa3kt48caCShn2GwB_UmjRk31V4e_7QDfMfrYiruRvh08BVlmb86i_gEFaOzPrCN3RWKREH3EJVmHh2ZTXYh_wUU5wU16DK76FNyJOukbxu3E5Mqgbp6XE_cnEDQoVRbUH4IXAmmWjytJaSsrj-NhhKOTZyYFFrhZsAk5-d0ujGaSrc4YzooKIVdqV-rjy-269gD0i2MsJfVwXieKhmuXMVWDzxR3GQ6x6h4gM1kU0gtF3J-8ypDCl7zC_jZ6w5k8YvkR1tN4B_oR_XW-dDOGSpORiBzCxAwHtL-1mWnHf2zHoP-xgQdT2w7CdXIOB2W0TUTfszM3jOGkr3_qet6GNkR62AJU6I-CKILO5vJA9GCOQiYVKKs4Tf__TC0krmqG5mzUMNvwCHCs2ii9Uqy27cB7HuuNwQZNneZpmsdC3PN3h7gA4iGAUGE78-jB5hvThNLxdWwqgU-FndsIEr5x7bb1SAviv7FQ5Z6gRRBU0niJx_l33rZu9k4Mtl8faFNP_ToBaMOwD9aJnndNEe9F0ouXM8MOku8rzY'
```

Return success

*Notes found*

```
{
    "notes": [
        {
            "id": 1,
            "title": "Test title",
            "distance": 0.07741552993590858
        }
    ]
}
```

*Notes not found*

```
{
    "notes": []
}
```

Return fail

```
{
    "message|error": "{STRING}"
}
```
