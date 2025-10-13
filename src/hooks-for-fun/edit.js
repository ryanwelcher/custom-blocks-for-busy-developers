/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { loadFromAPI, ShowLoadingState } from './utils.js';

/**
 * Styles
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	// 1. Create some state to hold our movie data.
	// Replace with your movie data state
	const keanuMovie = {
		poster: 'https://images.ctfassets.net/a6ek464hq2lg/7dhzg4s4A2BfBu5wX6vqq/a0e71b8334ade31b7e6a54eb1ffb5716/lyUDjRJTQl1yWECtVpZlB54UDFS.jpg',
		movie: 'Point Break',
		year: '1991',
		director: 'Kathryn Bigelow',
		character: 'Johnny Utah',
		total_whoas_in_movie: '7',
	};

	// 2. Create some state to hold our loading state.
	// Replace with your loading state
	const isLoading = false;

	// 3. When the loading state changes to true, load from the API.
	useEffect( () => {
		// Async function to load from the API
		async function loadFromAPI() {
			const response = await fetch(
				'https://whoa.onrender.com/whoas/random'
			);
			const data = await response.json();
			console.log( data?.[ 0 ] );

			// We want to set the movie data in state here

			// Set the loading state
		}
		// Call the function here.
		loadFromAPI();
	}, [] );

	// Retrieve the movie details from state.
	const { poster, movie, year, director, character, total_whoas_in_movie } =
		keanuMovie;

	return (
		<section { ...useBlockProps() }>
			{ isLoading ? (
				<ShowLoadingState />
			) : (
				<>
					<img
						className="movie-poster"
						width="50%"
						src={ poster }
						alt={ movie }
					/>
					<div className="movie-details">
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
						<Button
							variant="secondary"
							onClick={ () => {
								console.log(
									'This should change the loading state...'
								);
							} }
						>
							{ __(
								'Moar Keanu!',
								'custom-blocks-for-busy-developers'
							) }
						</Button>
					</div>
				</>
			) }
		</section>
	);
}
