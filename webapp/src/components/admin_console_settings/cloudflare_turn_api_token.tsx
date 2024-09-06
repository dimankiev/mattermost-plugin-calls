import React, {ChangeEvent} from 'react';
import {useIntl} from 'react-intl';
import {
    LabelRow, leftCol, rightCol,
} from 'src/components/admin_console_settings/common';
import manifest from 'src/manifest';
import {CustomComponentProps} from 'src/types/mattermost-webapp';

export default function CloudflareTurnApiToken(props: CustomComponentProps) {
    const {formatMessage} = useIntl();

    const placeholder = manifest.settings_schema?.settings.find((e) => e.key === 'CloudflareTurnApiToken')?.placeholder || '';

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(props.id, e.target.value);
    };

    return (
        <div
            data-testid={props.id}
            className='form-group'
        >
            <div className={'control-label ' + leftCol}>
                <LabelRow>
                    <label
                        data-testid={props.id + 'label'}
                        htmlFor={props.id}
                    >
                        {formatMessage({defaultMessage: 'Cloudflare TURN API Token'})}
                    </label>
                </LabelRow>
            </div>
            <div className={rightCol}>
                <input
                    data-testid={props.id + 'input'}
                    id={props.id}
                    className='form-control'
                    type='password'
                    placeholder={placeholder}
                    value={props.value}
                    onChange={handleChange}
                    disabled={props.disabled}
                />
                <div
                    data-testid={props.id + 'help-text'}
                    className='help-text'
                >
                    {formatMessage({defaultMessage: '(Optional) The Cloudflare TURN API Token used for generating TURN credentials.'})}
                </div>
            </div>
        </div>
    );
}
