/**
 * WordPress dependencies
 */
import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Function to load data from the API.
 */
export async function loadFromAPI( setIsLoading = null, setData ) {
	const response = await fetch( 'https://whoa.onrender.com/whoas/random' );
	const data = await response.json();
	setData( data?.[ 0 ] );

	// Simulate a loading delay for demo purposes.'
	if ( setIsLoading )
		setTimeout( () => {
			setIsLoading( false );
		}, 1500 );
}

export function ShowLoadingState() {
	return (
		<>
			<div className="movie-poster loading" />
			<div className="movie-details">
				<p>
					<Spinner />
					{ __( 'Loading...', 'custom-blocks-for-busy-developers' ) }
				</p>
			</div>
			;
		</>
	);
}
