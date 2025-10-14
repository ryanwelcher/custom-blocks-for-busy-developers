/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	// Replace this with the actual block count.
	const blocks = useSelect(
		( select ) => select( 'core/editor' ).getBlocks(),
		[]
	);
	const numberOfBlocks = blocks.length;

	const { savePost } = useDispatch( 'core/editor' );

	return (
		<div { ...useBlockProps() }>
			<p>{ sprintf( 'There are %s blocks ', numberOfBlocks ) }</p>
			<Button
				variant="primary"
				onClick={ () => {
					savePost();
				} }
			>
				{ __( 'Dispatch me!', 'custom-blocks-for-busy-developers' ) }
			</Button>
		</div>
	);
}
