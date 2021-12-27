import TierInfo from './TierInfo.json';
import Bullet from './Bullet.js';
import { SimpleGrid } from '@chakra-ui/react';

function Tier(props) {
    console.log(TierInfo);
    return (

        <div className='container mx-auto max-w-5xl px-4 mt-8'>

            {TierInfo.map((tier) => {
                return (
                    <>

                        <div className="text-4xl text-center mt-10">
                            <h1 className={`text-center font-extrabold inline text-purple`}>{tier.level}</h1>
                            <h1 className="text-center font-bold inline"> {tier.followingText}</h1>
                            <h1 className="text-center font-bold text-2xl text-blue-400 italic">{tier.price}</h1>

                        </div>
                        <SimpleGrid minChildWidth="300px" spacingX="10px" spacingY="10px" mt="8">
                            {
                                tier.benefits.map((benefit, index) => {
                                    return (
                                        <Bullet text={benefit} />

                                    )
                                })
                            }
                        </SimpleGrid>


                    </>
                )
            })
            }


        </div>
    )
}

export default Tier;