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

                        <div className="text-3xl text-center">
                            <img src={tier.logo} className="inline w-14 mr-3" alt="logo" />
                            <h1 className="text-purple text-center font-bold  inline">{tier.level}</h1>
                            <h1 className="text-center font-bold inline"> Tier Sponsor {tier.price}</h1>
                        </div>
                        <SimpleGrid minChildWidth="300px" spacingX="10px" spacingY="10px">
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