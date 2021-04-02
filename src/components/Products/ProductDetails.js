import React from 'react';

const Checkout = () => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">weight</th>
                        <th scope="col">price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Onion</td>
                        <td>200 gm</td>
                        <td>$150</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;