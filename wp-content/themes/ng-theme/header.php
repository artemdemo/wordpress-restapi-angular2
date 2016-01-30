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
    <?php wp_head(); ?>
</head>
<body <?php body_class($class); ?>>
