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
	// Create state to hold our movie data.
	const [ keanuMovie, setKeanuMovie ] = useState( [] );

	// Create state to hold our loading state.
	const [ isLoading, setIsLoading ] = useState( true );

	// When the loading state changes to true, load from the API.
	useEffect( () => {
		if ( isLoading ) {
			loadFromAPI( setIsLoading, setKeanuMovie );
		}
	}, [ isLoading ] );

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
								setIsLoading( true );
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
