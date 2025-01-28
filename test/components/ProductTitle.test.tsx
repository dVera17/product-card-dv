import React from "react"
import renderer from 'react-test-renderer'
import { ProductTitle } from '../../src/components/ProductTitle'

describe('ProductTitle', () => {
    test('should render ProductTitle using a personalized title', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Coffee Mug - Card" />
        )

        console.log(wrapper.toJSON());
    })
})