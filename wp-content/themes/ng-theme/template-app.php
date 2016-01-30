<?php
/*
Template Name: App
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>
        <?php wp_title( '|', 'true', 'right' );
        bloginfo( 'name' );
        ?>
    </title>
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>" />
    <link href="<?php echo get_template_directory_uri(); ?>/dist/css/styles.css" rel="stylesheet" type="text/css" />
    <script async src="<?php echo get_template_directory_uri(); ?>/dist/bundle.js"></script>
</head>
<body>

<div class="container">
    <wp-app>Loading...</wp-app>
</div>

</body>
</html>
