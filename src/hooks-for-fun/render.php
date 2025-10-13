<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section <?php echo get_block_wrapper_attributes(); ?>>
	<img
		class="movie-poster"
		width="50%"
		src={ poster }
		alt={ movie }
	/>
	<div class="movie-details">
		<h2>{ movie }</h2>
		<ul>
			<li>
				<b>Year:</b> { year }
			</li>
			<li>
				<b>Director:</b> { director }
			</li>
			<li>
				<b>Character:</b> { character }
			</li>
			<li>
				<b>Whoa! count:</b> { total_whoas_in_movie }
			</li>
		</ul>
	</div>
</p>
