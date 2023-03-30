<?php

// BEGIN iThemes Security - Ne modifiez pas ou ne supprimez pas cette ligne
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Désactivez l’éditeur de code - iThemes Security > Réglages > Ajustements WordPress > Éditeur de code
// END iThemes Security - Ne modifiez pas ou ne supprimez pas cette ligne

define( 'ITSEC_ENCRYPTION_KEY', 'NHQ9QFM1cF4lemlsfmUyQk56VnljVz9VfT5ZLTd4dis5aTEyPld5UGUmaVFBWF9MfSVJeUc2fSQufFh2NjFiJg==' );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-lepays' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wP]xG>k|l{[OzQ>p*#m4XwiIqFkj=Pj(N5kiTov0+th(@s-sI|f18kAL7HLlyRqm' );
define( 'SECURE_AUTH_KEY',  '~U07?|_lik.~h|,Kyo,* X?(4%*.BOV_r+V![cyrX?Sw{%wbwP2U>k>9I;|>zS2a' );
define( 'LOGGED_IN_KEY',    ',StOEa7yxG=X*D%Ka95#e&xg[R}`X^i!<>+xxwAQ^]t`MaQNz8hoqYc76jloB4I[' );
define( 'NONCE_KEY',        'Uu!3msb.HURJ9ztH)bELBuM59#C$hB@ ||[v^&*Q v)[w*9${.Kfn,O!+aE01iTX' );
define( 'AUTH_SALT',        'Qecnq6AH:c7QJvUAa GNY>W8AB,F<R+CqZs-~UE7{&*yz%8a$sU#a $y./H-+~CC' );
define( 'SECURE_AUTH_SALT', 'gI|>bS[F9AfDj:YQ~[C=5vHi4x}C4pHV~Wr-o)lC#xNg59@&bFDZD^dQs>chPfS7' );
define( 'LOGGED_IN_SALT',   'PN.xw-f<,_p59stm!2@>DDMU5>m ?)4)5jw,(,fcwRP+1J.LwTIR}aZu<-OG&dnd' );
define( 'NONCE_SALT',       'LP!LVG-utiEu,}W5&si!;x^R#C#,;?d.m[xvdMBu1d#syO3!9{T4|(6H0H/iea^R' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
