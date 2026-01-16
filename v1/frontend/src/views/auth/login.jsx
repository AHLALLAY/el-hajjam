import Input from '../../components/ui/input.jsx';
import Button from '../../components/button.jsx';

function Login() {
    return (
        <div>
            <form>
                <h2>login</h2>
                <div>
                    <Input
                        type={email}
                        label={email}
                        id={email}
                        value=""
                        onChange=""
                    />
                </div>
                <div>
                    <Input
                        type={Password}
                        label={Password}
                        id={Password}
                        value=""
                        onChange=""
                    />
                </div>
                <div>
                    <Button
                        type={submit}
                        children="login"
                    />
                </div>
            </form>
        </div>
    );
}