import Input from '../../components/ui/input.jsx';
import Button from '../../components/ui/button.jsx';

function Login() {
    return (
        <div>
            <form>
                <h2>login</h2>
                <div>
                    <Input
                        type="email"
                        label="email"
                        id="email"
                        value=""
                        onChange={() => {}}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        label="password"
                        id="password"
                        value=""
                        onChange={() => {}}
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        children="login"
                    />
                </div>
            </form>
        </div>
    );
}