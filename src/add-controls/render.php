<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 */
$message = $attributes['message'] ?? '';
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php if ( $message ) : ?>
		<?php echo esc_html( $message ); ?>
	<?php endif; ?>
</p>
